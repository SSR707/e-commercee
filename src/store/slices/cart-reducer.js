import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCount: 0,
  totalPrice: 0,
  products: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductList: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!product) {
        return {
          ...state,
          productCount: state.productCount + 1,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: action.payload.count,
              userPrice: action.payload.price * action.payload.count,
            },
          ],
        };
      }
    },
    toggleAmount: (state, action) => {
      const newProducts = state.products.map((item) => {
        if (item.id === action.payload.id) {
          const newUserCount = action.payload.type
            ? item.userCount + 1
            : Math.max(0, item.userCount - 1);
          const newCount = action.payload.type
            ? Math.max(0, item.count - 1)
            : item.count + 1;

          return {
            ...item,
            userCount: newUserCount,
            userPrice: newUserCount * item.price,
            count: newCount,
          };
        }
        return item;
      });

      return { ...state, products: newProducts };
    },
    deleteProduct: (state, action) => {
      return {
        ...state,
        productCount: state.productCount - 1,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    totalPrice: (state) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => a + b.userPrice, 0),
      };
    },
  },
});

export default cartReducer.reducer;

export const { addProductList, deleteProduct, totalPrice, toggleAmount } =
  cartReducer.actions;
