import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const initialState={
   data:[],
   status:"idle"
}
const productSlice=createSlice({
    

 name:'product',
 initialState,
 reducers:{

 },
 extraReducers:(builder)=>{
    builder
    .addCase(getProducts.pending,(state,action)=>
    {state.status="loading"})
    .addCase(getProducts.fulfilled,(state,action)=>{
      
            state.data=action.payload
            state.status="idle"
    })
    .addCase(getProducts.rejected,(state,action)=>
    {state.status="error"})

 }

})

export const {} = productSlice.actions
export default productSlice.reducer

export const getProducts=createAsyncThunk('products/get',async()=>{
  
       const response = await fetch('https://fakestoreapi.com/products')
       const result = response.json()
       console.log(result,"heloooooooooooooooooooooooooooooooooo")
       return result
       



})


