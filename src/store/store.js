import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-reducer";
import { loadState, saveState } from "../config/storage";
import {
  addProductList,
  deleteProduct,
  totalPrice,
  toggleAmount,
} from "./slices/cart-reducer";

const setTotalPrice = createListenerMiddleware();

setTotalPrice.startListening({
  matcher: isAnyOf(addProductList, deleteProduct, toggleAmount),
  effect: (_, listenerApi) => {
    listenerApi.dispatch(totalPrice());
  },
});

export const store = configureStore({
  reducer: {
    product: cartReducer,
  },
  preloadedState: {
    product: loadState("products"),
  },
  middleware: (defaultMiddlware) =>
    defaultMiddlware().concat(setTotalPrice.middleware),
});

store.subscribe(() => {
  saveState("products", store.getState()?.product);
});
