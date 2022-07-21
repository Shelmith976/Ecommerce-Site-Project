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
  );
}

export default App;
