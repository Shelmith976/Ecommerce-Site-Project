import React,{useState} from 'react';
import ProductCard from './productCard';
import './ProductListing.css'
const ProductListing = ({ products}) => {

  return (
    <div className="listing">
      {products?products.map(product=>(<ProductCard product={product} key={product.productId} />)):"Loading ..."}
    </div>
  );
};
export default ProductListing;
