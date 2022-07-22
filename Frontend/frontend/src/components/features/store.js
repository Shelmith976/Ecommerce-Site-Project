import { configureStore } from '@reduxjs/toolkit';
import detailreducer from './productDetailslice'
import productsReducer from './productSlice';
 const store = configureStore({
  reducer: {
    products: productsReducer,
    detail:detailreducer

  },
});
export default store;