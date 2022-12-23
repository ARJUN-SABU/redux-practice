import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    added: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

export const reducer = iceCreamSlice.reducer;
export const actions = iceCreamSlice.actions;
