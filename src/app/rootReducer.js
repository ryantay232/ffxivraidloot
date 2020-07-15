import { combineReducers } from "@reduxjs/toolkit";
import navBarReducer from "../features/navBar/navBarSlice";
import memberReducer from "../components/member/memberSlice";
import lootTableReducer from "../features/lootTable/lootTableSlice";
import lootManagerReducer from "../features/lootManager/lootManagerSlice";

const rootReducer = combineReducers({
  navBar: navBarReducer,
  member: memberReducer,
  lootTable: lootTableReducer,
  lootManager: lootManagerReducer,
});

export default rootReducer;
