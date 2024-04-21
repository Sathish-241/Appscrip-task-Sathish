import React from 'react';
import { PiHeart } from "react-icons/pi";

import './index.css';

const ProductItem=(productDetails)=>{
    const{image,title}=productDetails.productDetails

    return(
        <li className='product-item-container'>
            <img src={image} alt='productImage' className='product-image'/>
            <h4 className='product-title'>{title}</h4>
            <div className='error-text-container'>
            <p className='error-text'><span className='sign-in-text'>Sign In</span> or Create an account to see pricing </p>
            <PiHeart />

            </div>
            
        </li>
    )
}
export default ProductItem;