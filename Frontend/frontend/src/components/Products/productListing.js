import React from 'react';
import ProductCard from './productCard';
const productListing = ({ products}) => {
  return (
    <div>
      {products?products.map(product=>(<ProductCard product={product} key={product.productId}/>)):"Loading ..."}
      
    </div>
  );
};
export default productListing;
