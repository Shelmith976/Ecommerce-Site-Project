import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home.js'
import React from 'react';
import Products from './components/Products/products';
import {Provider} from 'react-redux'
import store from './components/features/store'
function App() {
  return (
      <div className="App">
        <Provider store ={store}> 
          <Products />
        </Provider>   
      </div>
    
  );
}

export default App;
