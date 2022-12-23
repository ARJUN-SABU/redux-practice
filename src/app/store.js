import { configureStore } from "@reduxjs/toolkit";

//reducers
import { reducer as cakeReducer } from "../features/cake/cakeSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

export default store;
