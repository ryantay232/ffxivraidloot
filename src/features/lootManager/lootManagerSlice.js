import { createSlice } from "@reduxjs/toolkit";

export const lootManagerSlice = createSlice({
  name: "lootManager",
  initialState: {
    weeklyLoot: [],
  },
  reducers: {
    addWeek: (state, action) => {
      const week = {
        floor1: {},
        floor2: {},
        floor3: {},
        floor4: {},
        tomeExchange: [],
        bookExchange: [],
      };
      state.weeklyLoot.push(week);
    },
  },
});

export const { addWeek } = lootManagerSlice.actions;

export const selectWeeklyLoot = (state) => state.lootManager.weeklyLoot;

export default lootManagerSlice.reducer;
