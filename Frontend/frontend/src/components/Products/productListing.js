import React from 'react';
import ProductCard from './productCard';
import  './product.css';
const productListing = ({ products}) => {
  return (
    <div className='products'>
      {products?products.map(product=>(<ProductCard product={product} key={product.productId}/>)):"Loading ..."}
      
    </div>
  );
};
export default productListing;
