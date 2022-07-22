import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './components/Navbar/Nav.js'
import Register from './pages/Register/Register.js'
import Login from './components/Login/Login ';
import Cart from './pages/Cart/Cart'

import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/routes/productDetail'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Nav />
    <Routes> 
    <Route path='/cart' element={<Cart/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/" element={<App/>}/>
      <Route path ="productDetail" element={<ProductDetail/>}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>

)
