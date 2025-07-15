import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets, url } from '../../assets/assets'

const Order = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAllOrders = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${url}/api/order/list`)
      if (response.data.success) {
        setOrders(response.data.data.reverse())
      } else {
        toast.error("Failed to fetch orders")
        setError("Failed to fetch orders")
      }
    } catch (err) {
      toast.error("Error fetching orders")
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value
      })
      if (response.data.success) {
        toast.success(`Order status updated to ${event.target.value}`)
        await fetchAllOrders()
      } else {
        toast.error("Failed to update order status")
      }
    } catch (err) {
      toast.error("Error updating order status")
    }
  }

  const formatPrice = (amount) => {
    return parseFloat(amount).toFixed(2)
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  if (loading) {
    return (
      <div className="order add">
        <h3>Order Page</h3>
        <div className="loading-spinner">Loading orders...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="order add">
        <h3>Order Page</h3>
        <div className="error-message">{error}</div>
        <button onClick={fetchAllOrders} className="retry-button">
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className='order add'>
      <div className="order-header">
        <h3>Order Management</h3>
        <div className="order-count">Total Orders: {orders.length}</div>
      </div>
      
      {orders.length === 0 ? (
        <div className="no-orders">
          <img src={assets.empty_order} alt="No orders" />
          <p>No orders found</p>
        </div>
      ) : (
        <div className="order-list">
          {orders.map((order) => (
            <div key={order._id} className={`order-item ${order.status.toLowerCase().replace(' ', '-')}`}>
              <div className="order-icon">
                <img src={assets.parcel_icon} alt="Order" />
                <span className="order-id">#{order._id.slice(-6).toUpperCase()}</span>
              </div>
              
              <div className="order-details">
                <div className="order-items">
                  <h4>Items:</h4>
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>
                        {item.name} × {item.quantity} (${formatPrice(item.price)} each)
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="order-customer">
                  <h4>Customer:</h4>
                  <p className='order-item-name'>
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p className='order-item-phone'>{order.address.phone}</p>
                </div>
                
                <div className="order-address">
                  <h4>Address:</h4>
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                  </p>
                </div>
              </div>
              
              <div className="order-summary">
                <div className="order-meta">
                  <p><strong>Items:</strong> {order.items.length}</p>
                  <p><strong>Total:</strong> ${formatPrice(order.amount)}</p>
                  <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                
                <div className="order-status">
                  <label htmlFor={`status-${order._id}`}>Status:</label>
                  <select 
                    id={`status-${order._id}`}
                    onChange={(e) => statusHandler(e, order._id)} 
                    value={order.status}
                    className={`status-select ${order.status.toLowerCase().replace(' ', '-')}`}
                  >
                    <option value="Food Processing">Food Processing</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Order