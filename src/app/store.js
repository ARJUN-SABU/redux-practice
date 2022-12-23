import { configureStore } from "@reduxjs/toolkit";

//reducers
import { reducer as cakeReducer } from "../features/cake/cakeSlice";
import { reducer as iceCreamReducer } from "../features/iceCream/iceCreamSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});

export default store;
