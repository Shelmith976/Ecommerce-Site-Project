

import React,{useState,useEffect} from 'react'
import {useParams}from 'react-router-dom'
import axios from "axios"
import { addProductDetail } from '../features/productDetailslice'
// import Product from './product';
import { useDispatch, useSelector } from 'react-redux';
const ProductDetails = () => {
  const [item, setItem]=useState(false)
  // const {productName}=useParams();
  const params=useParams();
  let {productName}= params
  const dispatch=useDispatch();
  // const product=useSelector(state=>state.product)
  const product=useSelector(state=>state.productName)

  useEffect(() => {
    
    axios.get(`http://localhost:5002/product/product/${productName}`)
    .then((res)=>{  // const product=useSelector(state=>state.product)

      console.log("res",res.data.results);
      
      dispatch (addProductDetail (res.data.results));
      setItem(res.data.results)
    })
    .catch((err)=>{
console.log("err",err);

    });
    
  
  }, [productName])
  console.log(product)

  
  return (

 <div className='container' >
   {
     item?
     <div >
       ITEM
       <img src={item.productImage} alt="" />
       <h1>{item.productName}</h1>
       <h2>{item.description}</h2>
       <p>{item.price}</p>
     </div>
     :
     <div>Loading....</div>


   }
  
        </div>
   
    
    
    
  )
}

export default ProductDetails;