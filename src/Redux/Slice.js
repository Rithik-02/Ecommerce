import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount: 0,
    products: [],
    address: null,
    subtotal: 0,
    brandData: [],
    sizeData: [],
    filterProduct: [],
    isSmallScreen: false,
    calculatedSize: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.cartCount += 1;
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
          state.cartCount -= 1;
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

    setIsSmallScreen: (state, action) => {
      state.isSmallScreen = action.payload;
    },
    sizeCalulate: (state, action) => {
      state.calculatedSize = action.payload;
    },
    emptyCart: (state) => {
      state.cartCount = 0;
      state.products = [];
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
  setIsSmallScreen,
  sizeCalulate,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
