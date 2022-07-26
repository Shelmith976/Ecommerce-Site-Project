import React,{useEffect} from 'react'
import ProductListing from '../../components/Products/productListing.js'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { addProducts } from '../../components/features/productSlice.js'
import './Home.css'

const url ="http://localhost:8000/product/viewProducts"

const Home = () =>{
    const dispatch = useDispatch()

  
    const products = useSelector(state=>state.products)
    useEffect(() => {
        axios.get(url).then(res=> dispatch(addProducts(res.data.results)))
    }, [dispatch])
    return(
        <div className="container d-grid">
               <ProductListing products={products}/>
        </div>
    )
}
export default Home
