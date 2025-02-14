import { createSlice } from '@reduxjs/toolkit'
import CardData from '../../CardData';

const initialState = {
    cart: [],
    items: CardData,
    totalQuantity: 0,
    totalPrice: 0,
  };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart : (state , action)=>{
      let findIdx = state.cart.findIndex((item)=> item.id === action.payload.id)
      if(findIdx >= 0){
        state.cart[findIdx].quantity += 1
      }
      else{
        state.cart.push({...action.payload, quantity : 1})
      }
    },
    getCartTotal : (state) =>{
      let {totalQuantity, totalPrice } = state.cart.reduce(
       (cartTotal, cartItem) =>{
         console.log("cartTotal", cartTotal);
         console.log("cartItem", cartItem);
         const {price, quantity} = cartItem
         console.log(price,quantity);
         const itemTotal = price * quantity;
         cartTotal.totalPrice += itemTotal;
         cartTotal.totalQuantity += quantity;
         return cartTotal
         
       }, 
       {
         totalPrice : 0,
         totalQuantity : 0
       }
     )
      state.totalPrice = parseFloat(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity
       },
       removeFromCart: (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        cartSlice.caseReducers.getCartTotal(state);
      },
      increaseQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item) {
          item.quantity += 1;
        }
      },
      decreaseQuantity: (state, action) => {
        const item = state.cart.find((item) => item.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },
  },
  
})

export const { addtocart, getCartTotal, removeFromCart, increaseQuantity, decreaseQuantity  } = cartSlice.actions

export default cartSlice.reducer