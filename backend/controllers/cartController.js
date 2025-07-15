import userModel from "../models/userModel.js";

// Add to user cart
const addToCart = async (req, res) => {
   try {
      const userData = await userModel.findById(req.body.userId);
      if (!userData) {
         return res.status(404).json({ success: false, message: "User not found" });
      }

      const cartData = userData.cartData || {};
      const itemId = req.body.itemId;

      if (!cartData[itemId]) {
         cartData[itemId] = 1;
      } else {
         cartData[itemId] += 1;
      }

      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Added to cart" });
   } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
   }
};

// Remove food from user cart
const removeFromCart = async (req, res) => {
   try {
      const userData = await userModel.findById(req.body.userId);
      if (!userData) {
         return res.status(404).json({ success: false, message: "User not found" });
      }

      const cartData = userData.cartData || {};
      const itemId = req.body.itemId;

      if (cartData[itemId] > 0) {
         cartData[itemId] -= 1;
      }

      await userModel.findByIdAndUpdate(req.body.userId, { cartData });
      res.json({ success: true, message: "Removed from cart" });
   } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
   }
};

// Get user cart
const getCart = async (req, res) => {
   try {
      const userData = await userModel.findById(req.body.userId);
      if (!userData) {
         return res.status(404).json({ success: false, message: "User not found" });
      }

      const cartData = userData.cartData || {};
      res.json({ success: true, cartData });
   } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
   }
};

export { addToCart, removeFromCart, getCart };
