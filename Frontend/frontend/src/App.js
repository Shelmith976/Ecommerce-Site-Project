// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
// import Register from './pages/Register/Register.js'
// import Home from './pages/Home/Home'
import React from 'react';
import Products from './components/Products/products';
import { Carousel } from 'react-bootstrap';
import Footer from './components/footer/footer';
import Pagination from './components/pagination/pagination';
function App() {

  return (
      <div className="container">


        <Products />
        <Pagination/>
        <Footer/>

      </div>

  );
}

export default App;
