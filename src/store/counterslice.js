import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "@/cookie";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
      setCookie("counter", state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      setCookie("counter", state.value);
    },
    incrementByAmount: (state, action) => {
      debugger;
      state.value +=
        typeof action.payload == "string"
          ? parseInt(action.payload)
          : action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
