import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    address: null,
    subtotal: 0,
    brandData: [],
    sizeData: [],
    filterProduct: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        console.log("quantity triggered");
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.products = state.products.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    selectedAddress: (state, action) => {
      state.address = action.payload;
    },
    addTotal: (state, action) => {
      state.subtotal = action.payload;
    },
    brandFilteredData: (state, action) => {
      state.brandData = action.payload;
    },
    sizeFilteredData: (state, action) => {
      state.sizeData = action.payload;
    },
    allFilteredData: (state, action) => {
      state.filterProduct = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  selectedAddress,
  addTotal,
  brandFilteredData,
  allFilteredData,
  sizeFilteredData,
} = cartSlice.actions;
export default cartSlice.reducer;
