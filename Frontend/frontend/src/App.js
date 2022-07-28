
// import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Nav from './components/Navbar/Nav.js'
import Register from './pages/Register/Register.js'
import Home from './pages/Home/Home.js'
import Login from './components/Login/Login .js';
import Cart from './pages/Cart/Cart.js'
import  {BrowserRouter,Routes, Route} from 'react-router-dom'
import ProductDetail from './pages/Productdetail/ProductDetail.js'
import './App.css';
import Products from './components/Products/products';
// import { Carousel } from 'react-bootstrap';
import Footer from './components/footer/footer';
import Admin from './components/Admin/admin.js';
import AdminProducts from './components/Admin/adminProducts.js';
import AdminCustomers from './components/Admin/adminCustomers.js';
import AdminOrders from './components/Admin/adminOrders.js'
import Search from './components/search/search.js';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Carousel />
        <Routes> 
        <Route path='/admin' element={<Admin />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart />}/>
          <Route path="/product/:productName" element={<ProductDetail/>}/>
          <Route path='/adminProducts' element={<AdminProducts />}/>
          <Route path='/adminOrders' element={<AdminOrders />}/>
          <Route path='/adminCustomers' element={<AdminCustomers />}/>
          <Route path='/search/:productName' element={<Search />}/>


        </Routes> 
        
        <Footer/>

      </div>
    </BrowserRouter>
  );
}


export default App;
