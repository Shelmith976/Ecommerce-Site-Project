<<<<<<< HEAD
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Nav.js'
import Register from './pages/Register/Register.js'
import Home from './pages/Home/Home.js'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/register' element={<Register/>} />
        </Routes>    
      </div>
    </Router>
=======
import React from 'react';
import Login from './components/Login/Login ';
import Products from './components/Products/products';
import {Provider} from 'react-redux'
import store from './components/features/store'
function App() {
  return (
    <Provider store ={store}> 
    <div className="App">
      {/* <Login /> */}
      <Products />
    </div>
    </Provider>
>>>>>>> 7e2be69a996faabfee01a0ab3e3e6132ddf36cf7
  );
}

export default App;
