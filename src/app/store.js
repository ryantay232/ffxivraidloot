import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import { loadState, saveState } from "./localStorage.js";

const persistedState = loadState();
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    staticMembers: store.getState().staticMembers,
    lootTable: store.getState().lootTable,
    lootManager: store.getState().lootManager,
  });
});

export default store;
