import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    added: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const reducer = cakeSlice.reducer;
export const actions = cakeSlice.actions;
