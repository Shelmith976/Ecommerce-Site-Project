import React,{useEffect,useState} from 'react'
import ProductListing from '../../components/Products/productListing.js'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { addProducts } from '../../components/features/productSlice.js'
import './Home.css'
import Carousels from '../../pages/Home/imagesSlider.js';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () =>{
	const [page, setPage]=useState(2);
		const [rowcount, setRowcount]=useState(2);
		const handlePrev=()=>{
			if(page===1){
				return page
			}
			setPage(page-1)
		}
		const handleNext=()=>{
			setPage(page+1)
		}
        const dispatch = useDispatch()
    const products = useSelector(state=>state.products)
		useEffect(()=>{
            axios.get(`http://localhost:5002/product/pageProduct?row_count=${rowcount}&page_number=${page}`).then((res)=>{
                dispatch(addProducts(res.data))
                console.log(res.data);
                
              }
        
            )
            },[rowcount, page])
            console.log(products);
            
    return(
        <div className="container d-grid">
                    <Carousels/>
                    <ProductListing products={products}/>
                    <div className="pages">
        <button onClick={handlePrev}>previous</button>
        <span>{page} </span>
        <button onClick={handleNext}>next</button>
        {/* <input type="number" id='rowcount' value={rowcount} onChange={e=>setRowcount(e.currentTarget.value)}/> */}
        {/* <label htmlFor="rowcount">No. of Rows</label> */}
      </div>
               {/* <Pagination/> */}
        </div>
    )
}
export default Home
