import { configureStore } from "@reduxjs/toolkit";

//reducers
import { reducer as cakeReducer } from "../features/cake/cakeSlice";
import { reducer as iceCreamReducer } from "../features/iceCream/iceCreamSlice";
import { reducer as userReducer } from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
});

export default store;
