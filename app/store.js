import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/ProductSlice/ProductSlice";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});
