import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;  // Increasing quantity if item exists
      } else {
        state.push({ ...action.payload, quantity: 1 });  // Adding new item with quantity 1
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    }
  }
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
