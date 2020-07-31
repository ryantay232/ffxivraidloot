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
            memberId: "",
          },
          2: {
            loot: "",
            memberId: "",
          },
          3: {
            loot: "",
            memberId: "",
          },
        },
        floor2: {
          1: {
            loot: "",
            memberId: "",
          },
          2: {
            loot: "",
            memberId: "",
          },
          3: {
            loot: "glaze",
            memberId: "",
          },
          4: {
            loot: "tomestone",
            memberId: "",
          },
        },
        floor3: {
          1: {
            loot: "",
            memberId: "",
          },
          2: {
            loot: "",
            memberId: "",
          },
          3: {
            loot: "twine",
            memberId: "",
          },
          4: {
            loot: "ester",
            memberId: "",
          },
        },
        floor4: {
          1: {
            loot: "mainArm",
            memberId: "",
          },
          2: {
            loot: "body",
            memberId: "",
          },
          3: {
            loot: "randomWeapon",
            job: "AST",
            memberId: "",
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
    editWeek: (state, action) => {
      state.weeklyLoot[action.payload.weekNo] = action.payload.weekData;
    },
  },
});

export const { addWeek, deleteWeek, editWeek } = lootManagerSlice.actions;

export const selectWeeklyLoot = (state) => state.lootManager.weeklyLoot;

export default lootManagerSlice.reducer;
