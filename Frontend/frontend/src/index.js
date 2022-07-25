import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Navbar/Nav.js'
import App from './App'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/routes/productDetail'
import Register from './pages/Register/Register'
import Login from './components/Login/Login ';
import {Provider} from 'react-redux'
import store from './components/features/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './pages/Home/imagesSlider';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <Provider store ={store}> 

  <React.StrictMode>
    <Nav />
    <Carousel/>
    <Routes>
    <Route path ="/" element={<App/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path ="/:productName" element={<ProductDetail />}/>
     <Route path='/register' element={<Register/>} />

    </Routes>
  </React.StrictMode>
  </Provider>  

  </BrowserRouter>

)

