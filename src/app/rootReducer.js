import { combineReducers } from "@reduxjs/toolkit";
import navBarReducer from "../features/navBar/navBarSlice";
import staticMembersReducer from "../features/staticMembers/staticMembersSlice";
import lootTableReducer from "../features/lootTable/lootTableSlice";
import lootManagerReducer from "../features/lootManager/lootManagerSlice";

const rootReducer = combineReducers({
  navBar: navBarReducer,
  staticMembers: staticMembersReducer,
  lootTable: lootTableReducer,
  lootManager: lootManagerReducer,
});

export default rootReducer;
