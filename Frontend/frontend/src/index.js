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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <Provider store ={store}> 

  <React.StrictMode>
    <Nav />
    <Routes>
    <Route path ="/" element={<App/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path ="/productDetail" element={<ProductDetail />}/>
     <Route path='/register' element={<Register/>} />

    </Routes>
  </React.StrictMode>
  </Provider>  

  </BrowserRouter>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

