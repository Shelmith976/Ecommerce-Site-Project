import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './components/features/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>
)
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
