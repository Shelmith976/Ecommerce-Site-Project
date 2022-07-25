import { createSlice } from '@reduxjs/toolkit'

const initialState={}
const productDetailSlice=createSlice({
    name:"detail",
    initialState:initialState,
    reducers:{
    addProductDetail:(state,{payload})=>{
    return state= payload
}
}
})

export const{addProductDetail}=productDetailSlice.actions
export default productDetailSlice.reducer
