import { createSlice } from '@reduxjs/toolkit'
const initialState={
    productDetail:'',
}
const productDetailSlice=createSlice({
    name:'detail',
    initialState:initialState,
    reducers:{
    addProductDetail:(state,{payload})=>{
        console.log(payload);
        
    return state.productDetail= payload
}
}
})

export const{addProductDetail}=productDetailSlice.actions
export default productDetailSlice.reducer
