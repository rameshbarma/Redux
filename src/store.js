import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featuers/counter/counterSlice";
import usersReducer from "./featuers/users/usersSlice";
import { questionsReducer } from "./featuers/questions/questiosSlice";
import { matrimonialReducer } from "./featuers/matrimonial/matrimonialSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    questions: questionsReducer,
    matrimonial: matrimonialReducer,
  },
});
