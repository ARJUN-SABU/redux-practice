import { createSlice } from "@reduxjs/toolkit";
import { actions as cakeActions } from "../cake/cakeSlice";

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

  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export const reducer = iceCreamSlice.reducer;
export const actions = iceCreamSlice.actions;
