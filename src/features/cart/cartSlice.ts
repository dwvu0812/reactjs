import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface Item {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface cartInterface {
  cart: Item[];
}

const initialState = {
  cart: [],
} as cartInterface;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      // payload = pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload,
      ) as Item;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      // payload = pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload,
      ) as Item;
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartQuantity = (state: RootState) => {
  return state.cart.cart.reduce((total, item) => (total += item.quantity), 0);
};
export const getQuantityById = (state: RootState, id: number) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
export const getTotalCartPrice = (state: RootState) => {
  return state.cart.cart.reduce((total, item) => (total += item.totalPrice), 0);
};
