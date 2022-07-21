<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/routes/productDetail'
const root = ReactDOM.createRoot(document.getElementById('root'))
>>>>>>> 7e2be69a996faabfee01a0ab3e3e6132ddf36cf7
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
    <Route path ="/" element={<App/>}/>
    <Route path ="productDetail" element={<ProductDetail/>}/>

    </Routes>
  </React.StrictMode>
<<<<<<< HEAD
);
=======
  </BrowserRouter>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
>>>>>>> 7e2be69a996faabfee01a0ab3e3e6132ddf36cf7
