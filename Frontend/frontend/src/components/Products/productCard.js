import React from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
const ProductCard = ({ product }) => {
  const cart= useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
        <div className="card h-100 shadow-rounded">
          <Link to={`/product/${product.productName}`}>
          <img src={product.productImage} alt ="" className="card-img-top img-fluid"/></Link> 
          <div className="card-body"> 
            <div className="d-grid">
            <h5 className="card-title">{product.productName}</h5>
            <h5 className="fw-bolder">{product.price}</h5>
            </div>
            <div className="">
              <p className="card-text">{product.category}</p>
            </div>
            <div className="d-grid justify-content-end mt-4">
              <button className="btn btn-sm btn-outline-success" onClick={() =>dispatch({type:"ADD",payload:product})}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>    
  )
};

export default ProductCard;
