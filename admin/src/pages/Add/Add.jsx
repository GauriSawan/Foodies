import React, { useState } from 'react'
import './Add.css'
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    });

    const [image, setImage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("price", Number(data.price));
            formData.append("category", data.category);
            formData.append("image", image);
            
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Salad"
                });
                setImage(false);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("An error occurred while adding the product");
        } finally {
            setIsSubmitting(false);
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className='add-container'>
            <h2 className='add-title'>Add New Product</h2>
            <form className='add-form' onSubmit={onSubmitHandler}>
                <div className='add-img-upload'>
                    <p className='upload-label'>Upload Product Image</p>
                    <label htmlFor="image" className='image-upload-container'>
                        {!image ? (
                            <div className='upload-placeholder'>
                                <img src={assets.upload_area} alt="Upload area" className='upload-icon' />
                                <span className='upload-text'>Click to upload image</span>
                            </div>
                        ) : (
                            <div className='image-preview-container'>
                                <img src={URL.createObjectURL(image)} alt="Preview" className='image-preview' />
                                <button 
                                    type="button" 
                                    className='change-image-btn'
                                    onClick={() => setImage(false)}
                                >
                                    Change Image
                                </button>
                            </div>
                        )}
                    </label>
                    <input 
                        onChange={(e) => setImage(e.target.files[0])} 
                        type="file" 
                        id="image" 
                        accept="image/*" 
                        hidden 
                        required 
                    />
                </div>
                
                <div className='form-group'>
                    <label htmlFor="name" className='form-label'>Product Name</label>
                    <input 
                        name='name' 
                        id="name"
                        onChange={onChangeHandler} 
                        value={data.name} 
                        type="text" 
                        className='form-input'
                        placeholder='Enter product name' 
                        required 
                    />
                </div>
                
                <div className='form-group'>
                    <label htmlFor="description" className='form-label'>Product Description</label>
                    <textarea 
                        name='description' 
                        id="description"
                        onChange={onChangeHandler} 
                        value={data.description} 
                        className='form-textarea'
                        rows={6} 
                        placeholder='Enter product description' 
                        required 
                    />
                </div>
                
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor="category" className='form-label'>Product Category</label>
                        <select 
                            name='category' 
                            id="category"
                            onChange={onChangeHandler} 
                            value={data.category}
                            className='form-select'
                        >
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    
                    <div className='form-group'>
                        <label htmlFor="price" className='form-label'>Product Price ($)</label>
                        <input 
                            type="number" 
                            name='price' 
                            id="price"
                            onChange={onChangeHandler} 
                            value={data.price} 
                            className='form-input'
                            placeholder='25.00' 
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>
                </div>
                
                <button 
                    type='submit' 
                    className='submit-btn'
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <span className="spinner"></span> Adding...
                        </>
                    ) : (
                        'Add Product'
                    )}
                </button>
            </form>
        </div>
    )
}

export default Add