import { combineReducers } from '@reduxjs/toolkit';
import memberReducer from "../components/member/memberSlice";

const rootReducer = combineReducers({
  member: memberReducer,
});

export default rootReducer;
