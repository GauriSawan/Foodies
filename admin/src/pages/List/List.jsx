import React, { useEffect, useState } from 'react';
import './List.css';
import { url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchList = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch food list");
      }
    } catch (error) {
      toast.error("An error occurred while fetching data");
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId
      });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message || "Failed to remove food");
      }
    } catch (error) {
      toast.error("An error occurred while removing food");
      console.error("Remove error:", error);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list-container'>
      <h2>All Foods List</h2>
      
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : list.length === 0 ? (
        <p className="no-items">No food items available</p>
      ) : (
        <div className='list-table'>
          <div className="list-table-header">
            <span>Image</span>
            <span>Name</span>
            <span>Category</span>
            <span>Price</span>
            <span>Action</span>
          </div>
          {list.map((item) => (
            <div key={item._id} className='list-table-row'>
              <img 
                src={`${url}/images/${item.image}`} 
                alt={item.name} 
                loading="lazy"
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price.toFixed(2)}</p>
              <button 
                onClick={() => removeFood(item._id)}
                aria-label={`Remove ${item.name}`}
                className="remove-btn"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default List;