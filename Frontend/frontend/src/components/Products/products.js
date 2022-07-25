import axios from 'axios';
import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProducts } from '../features/productSlice';
// import ProductCard from './productCard';
import ProductListing from './productListing'

function Home() {
  //   const [products, setProducts] = useState([]);
  const products= useSelector((state) => state.products);
  const dispatch = useDispatch();
    const product= axios.get(`http://localhost:5002/product/viewProducts`)

    useEffect(()=>{
      dispatch (addProducts([]))

      product.then((res)=>{
        dispatch(addProducts(res.data.results))
    
      }

    )
    },[])

    // dispatch(addProducts(res));

  // getproducts(), [dispatch];
  return (
 <div>
  <ProductListing products={products}/>
  </div>
  )
  }



export default Home;
