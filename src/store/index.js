import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenslice";

export default configureStore({
  reducer: {
    token: tokenReducer,
  },
});
