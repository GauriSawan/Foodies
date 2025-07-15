import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gaurisawant:Gauri%24Ariya24@mycluster.r8zgzc5.mongodb.net/food-del');
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};
