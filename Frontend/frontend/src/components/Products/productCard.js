import React from 'react';
import productDetail from '../routes/productDetail';
const ProductCard = ({ product }) => {
  return (
    <div>
<h1>{product.productName}</h1>
  <h2>{product.description}</h2>
  <button onClick={
    ()=>{
      const navigate =() =>{
        const anchor =document.createElement('a');
        anchor.href = 'productDetail';
        anchor.click();
      }
      navigate();
    }
  }>add</button>
  </div>
  )
};

export default ProductCard;
