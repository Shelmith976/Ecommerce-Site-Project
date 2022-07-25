import React from 'react';
import ProductDetail from '../routes/productDetail';
import  './product.css';
const ProductCard = ({ product }) => {
  return (
    <div className='card'>

  <img src={product.productImage} alt="" />
  <p>{product.productName}</p>
  <p>{product.description}</p>
  <p>{product.category}</p>


  <button onClick={
    ()=>{
      const navigate =() =>{
        const anchor =document.createElement('a');
        anchor.href =`${product.productName}`;
        anchor.click();
      }
      navigate();
    }
  }>add to carts</button>
  </div>
  )
};

export default ProductCard;
