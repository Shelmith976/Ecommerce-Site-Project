import React,{useEffect} from 'react'
import {useParams}from 'react-router-dom'
import axios from "axios"
import { addProductDetail } from '../../components/features/productDetailReducer';
import { useDispatch, useSelector } from 'react-redux';

export const ProductDetail = () => {
  const {productName}=useParams();
 
  const detail=useSelector(state=>state.detail)
  const dispatch=useDispatch();
  useEffect(() => {
    
    axios.get(`http://localhost:8000/product/product/${productName}`).then(res=>{
    
    dispatch (addProductDetail (res.data.results[0]))})
    
  
  }, [])
  console.log(detail)
  
  return (
    <div>
      
        <img src={detail.productImage} alt="" />
        <p>{detail.productName}</p>
        <p> {detail.category}</p>
        <small className='price'>${detail.price}</small>
        <button className='btn btn-primary'>Add to cart</button>
    </div>

  )
}
export default ProductDetail;
