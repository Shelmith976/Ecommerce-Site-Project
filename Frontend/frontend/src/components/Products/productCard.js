import React from 'react';
import ProductDetail from '../routes/productDetail';
import  './product.css';
const ProductCard = ({ product }) => {
  return (
    <div className='card'>
<h1>{product.productName}</h1>
  <h2>{product.description}</h2>
  <img src={product.productImage} alt="" />
  <button onClick={
    ()=>{
      const navigate =() =>{
        const anchor =document.createElement('a');
        anchor.href = 'productDetail';
        anchor.click();
      }
      navigate();
    }
  }>add to carts</button>
  </div>
  )
};

export default ProductCard;
