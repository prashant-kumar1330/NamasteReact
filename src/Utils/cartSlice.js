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
        removeItem: (state)=>{
            state.item.pop();
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions
 
export default cartSlice.reducer;