import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  amountItems: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, payload) => {
      state.cart = [...state.cart, payload];
      state.amountItems = state.amountItems + 1;
    },
    changeQty: (state, payload) => {
        state.cart = state.cart.map((item) => {
            if(item.payload.id === payload.payload.id){
             item.payload.qty = payload.payload.newQty
             return item
            }else{
                return item
            }
        })
    },
    removeFromCart: (state, payload) => {
        state.cart = state.cart.filter((data) => data.payload.id !== payload.payload)
        state.amountItems = state.amountItems - 1;
    },
    cartTotal: (state) => {
      let arr = state.cart.map((data) => data.payload.retailPrice * data.payload.qty);
      arr = [0, ...arr];

      if (arr === []) {
        state.total = 0;
      } else {
        state.total = arr.reduce((first, last) => {
          return first + last;
        });
      }
    },
    clearCart: (state)=> {
        state.cart = []
        state.amountItems = 0
    },
    changeSize: (state, payload) => {
        state.cart = state.cart.map((item) => {
            if(item.payload.id === payload.payload.id){
             item.payload.size = payload.payload.newSize
             return item
            }else{
                return item
            }
        })
    }
  },
});

export const { addToCart, cartTotal, removeFromCart, clearCart, changeQty, changeSize } = cartSlice.actions;

export default cartSlice.reducer;
