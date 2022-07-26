import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import Nav from './components/Navbar/Nav.js'
import Register from './pages/Register/Register.js'
import Home from './pages/Home/Home.js'
import Login from './components/Login/Login .js';
import Cart from './pages/Cart/Cart.js'
import  {BrowserRouter,Routes, Route} from 'react-router-dom'
import ProductDetail from './pages/Productdetail/ProductDetail.js'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes> 
          
          <Route path='/cart' element={<Cart />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/product/:productName" element={<ProductDetail/>}/>
        
        </Routes> 
      </div>
    </BrowserRouter>
  );
}


export default App;
