import { combineReducers } from "@reduxjs/toolkit";
import navBarReducer from "../features/navBar/navBarSlice";
import memberReducer from "../components/member/memberSlice";

const rootReducer = combineReducers({
  navBar: navBarReducer,
  member: memberReducer,
});

export default rootReducer;
