import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext);
  const navigate = useNavigate();

  // Function to format numbers to 2 decimal places
  const formatMoney = (amount) => {
    return parseFloat(amount).toFixed(2);
  }

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            const itemTotal = item.price * cartItems[item._id];
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={`${url}/images/${item.image}`} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${formatMoney(item.price)}</p>
                  <div>{cartItems[item._id]}</div>
                  <p>${formatMoney(itemTotal)}</p>
                  <p 
                    className='cart-items-remove-icon' 
                    onClick={() => removeFromCart(item._id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    ×
                  </p>
                </div>
                <hr />
              </div>
            )
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${formatMoney(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? '0.00' : '5.00'}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? '0.00' : formatMoney(getTotalCartAmount() + 5)}</b>
            </div>
          </div>
          <button 
            onClick={() => navigate('/order')}
            disabled={getTotalCartAmount() === 0}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input 
                type="text" 
                placeholder='promo code'
                aria-label="Enter promo code"
              />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart