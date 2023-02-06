import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "@/cookie";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "123jyc",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
      setCookie("token", state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      setCookie("token", state.value);
    },
    setToken: (state, action) => {
      state.value = action.payload;
      setCookie("token", state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
