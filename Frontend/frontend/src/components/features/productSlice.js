import { createSlice } from '@reduxjs/toolkit';
const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProducts: (state, { payload }) => {
      // console.log(payload);
      
      return (state = payload);
    },
  },
});
export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
