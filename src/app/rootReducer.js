import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import memberReducer from "../components/member/memberSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  member: memberReducer,
});

export default rootReducer;
