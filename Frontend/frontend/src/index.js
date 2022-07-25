import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import store from './components/features/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>

  </BrowserRouter>
);
