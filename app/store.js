import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/ProductSlice/ProductSlice";
import UserSlice from "../features/UserSlice/UserSlice";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
    user: UserSlice,
  },
});
