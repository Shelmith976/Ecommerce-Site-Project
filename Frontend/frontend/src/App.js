import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Nav.js'
import Register from './pages/Register/Register.js'
import Home from './pages/Home/Home.js'
import React from 'react';
import Login from './components/Login/Login ';
import Products from './components/Products/products';
import {Provider} from 'react-redux'
import store from './components/features/store'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/register' element={<Register/>} />
        </Routes> 
        <Provider store ={store}> 
          {/* <Login /> */}
          <Products />
        </Provider>   
      </div>
    </Router>
    
  );
}

export default App;
