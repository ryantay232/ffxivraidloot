import { createSlice } from "@reduxjs/toolkit";

export const lootManagerSlice = createSlice({
  name: "lootManager",
  initialState: {
    weeklyLoot: [],
  },
  reducers: {
    addWeek: (state) => {
      const week = {
        floor1: {
          1: {
            loot: "",
            member: "",
          },
          2: {
            loot: "",
            member: "",
          },
          3: {
            loot: "",
            member: "",
          },
        },
        floor2: {
          1: {
            loot: "",
            member: "",
          },
          2: {
            loot: "",
            member: "",
          },
          3: {
            loot: "glaze",
            member: "",
          },
          4: {
            loot: "tomestone",
            member: "",
          },
        },
        floor3: {
          1: {
            loot: "",
            member: "",
          },
          2: {
            loot: "",
            member: "",
          },
          3: {
            loot: "twine",
            member: "",
          },
          4: {
            loot: "ester",
            member: "",
          },
        },
        floor4: {
          1: {
            loot: "mainArm",
            member: "",
          },
          2: {
            loot: "body",
            member: "",
          },
          3: {
            loot: "",
            member: "",
          },
        },
        tomeExchange: [],
        bookExchange: [],
      };
      state.weeklyLoot.push(week);
    },
    deleteWeek: (state, action) => {
      state.weeklyLoot.splice(action.payload.weekNo, 1);
    },
    editWeek: (state, action) => {},
  },
});

export const { addWeek, deleteWeek, editWeek } = lootManagerSlice.actions;

export const selectWeeklyLoot = (state) => state.lootManager.weeklyLoot;

export default lootManagerSlice.reducer;
