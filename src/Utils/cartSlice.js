import { createSlice } from "@reduxjs/toolkit";


const cartSlice  = createSlice({
    name: 'cart',
    initialState:{
        item:[]
    },
    reducers:{
        addItem: (state, action)=>{
           state.item.push(action.payload);
        },
        clearCart: (state)=>{
            state.item = []; 
        },
        removeItem: (state,action)=>{
           const i= state.item.findIndex((element)=> element===action.payload);
           console.log("jj=>"+i+state.item[0]);
            state.item.splice(i,1);
           console.log(action.payload)
        
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions
 
export default cartSlice.reducer;