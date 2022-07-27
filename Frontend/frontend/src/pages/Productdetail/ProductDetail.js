import React,{useEffect, useState} from 'react'
import {useParams}from 'react-router-dom'
import axios from "axios"
import { addProductDetail } from '../../components/features/productDetailslice';
import { useDispatch, useSelector } from 'react-redux';

export const ProductDetail = () => {
  const {productName}=useParams();
  const [detail, setDetails]  = useState([]) 
//useSelector(state=>state.detail)
  //const dispatch=useDispatch();
  
  console.log(detail)
  useEffect (()=>{
    axios.get(`http://localhost:8000/product/product/${productName}`).then((res)=>{
      console.log(res)
      setDetails(res.data.results)
      //dispatch (addProductDetail (res.data.results[0]))
      
    
    })
  },[])
  return (
    <div className="card h-100">
      <div className="d-grid justify-content-center">
          <img src={detail.productImage} alt="" />
          <h5>{detail.productName}</h5>
          <p>{detail.description}</p>
          <p> {detail.category}</p>
          <small className='price'>${detail.price}</small>
          <button className='btn btn-primary'>Add to cart</button>
      </div>
    </div>

  )
}
export default ProductDetail;
