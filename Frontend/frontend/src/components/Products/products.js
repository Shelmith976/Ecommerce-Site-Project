import axios from 'axios';
import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProducts } from '../features/productSlice';
import ProductListing from './productListing'

function Home() {
  
  const products= useSelector((state)=>state.products);
  const dispatch = useDispatch();

    const product= axios.get(`http://localhost:8000/product/viewProducts`)

    useEffect(()=>{
      dispatch (addProducts([]))
 
      product.then((res)=>{
        dispatch(addProducts(res.data.results))
      }

    )
    },[])
  return (
 <div>
  <ProductListing products={products}/>
  </div>
  )
}
export default Home;
