import { createSlice } from '@reduxjs/toolkit'
const productDetailSlice=createSlice({
    name:"detail",
    initialState:[],
    reducers:{
    addProductDetail:(state,{payload})=>{
    return state= payload
}
}
})

export const{addProductDetail}=productDetailSlice.actions
export default productDetailSlice.reducer
