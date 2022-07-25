
import React,{useEffect, useState} from 'react'
import {useParams}from 'react-router-dom'
import axios from "axios"
import { addProductDetail } from '../features/productDetailslice'
import { useDispatch, useSelector } from 'react-redux';
const ProductDetails = () => {
  const {productName}=useParams();
 const [detail,setDetail]=useState([]);
  const dispatch=useDispatch();
  useEffect(() => {
    
    axios.get(`http://localhost:5002/product/product/${productName}`)
    .then((res)=>{  

      // console.log("res",res);
      setDetail(res.data.results)
      // dispatch (addProductDetail (res.data.results));
    })
  }, [])

  // const detail = useSelector((state)=> state.detail.productDetail)
  console.log(detail);

  return (

 <div className='container' >  
       <img src={detail.productImage} alt="one" />
       <h1>{detail.productName}</h1>
       <h2>{detail.description}</h2>
       <p>{detail.price}</p>
  
        </div>
  )
}

export default ProductDetails;