import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const store = configureStore({
  reducer: {
    posts: slice,
  },
});

console.log(store.getState());

export default store;
