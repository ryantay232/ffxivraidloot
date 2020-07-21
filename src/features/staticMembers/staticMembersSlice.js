import { createSlice } from "@reduxjs/toolkit";

import {
  defaultNames,
  defaultJobs,
  defaultIlvs,
  defaultEqList,
  dummyBis,
  dummyJobs,
  dummyTwines,
  dummyGlazes,
} from "../../app/defaultVars.js";

const twineEq = ["head", "body", "hands", "legs", "feet"];
const glazeEq = [
  "waist",
  "earrings",
  "necklace",
  "bracelets",
  "ring1",
  "ring2",
];

function calculateUpgrades(eqList, bisList) {
  let ester = 0;
  let twine = 0;
  let polish = 0;
  Object.keys(bisList)
    .filter(
      (eq) =>
        bisList[eq].type === "A. Tome" && eqList[eq].type !== bisList[eq].type
    )
    .forEach((eq, i) => {
      if (twineEq.includes(eq)) {
        twine++;
      } else if (glazeEq.includes(eq)) {
        polish++;
      } else {
        ester++;
      }
    });
  return [ester, twine, polish];
}

export const staticMembersSlice = createSlice({
  name: "staticMembers",
  initialState: {
    characterNames: defaultNames,
    jobs: dummyJobs,
    ilvs: defaultIlvs,
    currentList: defaultEqList,
    bisList: dummyBis,
    twineList: dummyTwines,
    glazeList: dummyGlazes,
  },
  reducers: {
    setInfo: (state, action) => {
      state.characterNames[action.payload.memberId] = action.payload.name;
      state.jobs[action.payload.memberId] = action.payload.job;
      state.currentList[action.payload.memberId] = action.payload.current;
      state.bisList[action.payload.memberId] = action.payload.bis;
      state.ilvs[action.payload.memberId] = Math.floor(
        Object.keys(action.payload.current)
          .map((x) => action.payload.current[x].ilv)
          .reduce((x, y) => x + y, 0) / 12
      );
      const upgrades = calculateUpgrades(
        action.payload.current,
        action.payload.bis
      );
      state.twineList[action.payload.memberId] = upgrades[1];
      state.glazeList[action.payload.memberId] = upgrades[2];
    },
    setEq: (state, action) => {
      console.log("done");
    },
  },
});

export const { setInfo, setEq } = staticMembersSlice.actions;

export const selectCharacterNames = (state) => state.staticMembers.characterNames;

export const selectJobs = (state) => state.staticMembers.jobs;

export const selectIlvs = (state) => state.staticMembers.ilvs;

export const selectCurrentList = (state) => state.staticMembers.currentList;

export const selectBisList = (state) => state.staticMembers.bisList;

export const selectTwineList = (state) => state.staticMembers.twineList;

export const selectGlazeList = (state) => state.staticMembers.glazeList;

export default staticMembersSlice.reducer;
