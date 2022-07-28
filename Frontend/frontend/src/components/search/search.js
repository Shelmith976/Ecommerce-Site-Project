import axios from 'axios';
import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProducts } from '../features/productSlice';
import ProductListing from '../Products/productListing'
import {useParams}from 'react-router-dom'

function Search() {
  const {productName} =  useParams()
  const products= useSelector((state)=>state.products);
  const dispatch = useDispatch();
    // const product= axios.get(`http://localhost:5002/product/product?productName=${productName}`)
    useEffect(()=>{
      axios.get(`http://localhost:5002/product/searchProduct?productName=${productName}`)
      .then((res)=>{
        console.log(res);
        dispatch(addProducts(res.data))
      }
    )
    },[products])
  return (
 <div>
  <ProductListing products={products}/>
  </div>
  )
}
export default Search;