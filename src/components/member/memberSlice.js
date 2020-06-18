import { createSlice } from "@reduxjs/toolkit";

import {
  defaultNames,
  defaultJobs,
  defaultIlvs,
  defaultEqList,
  dummyBis,
  dummyJobs,
} from "../../app/defaultVars.js";

const twineEq = ["head", "body", "hands", "legs", "feet"];
const polishEq = [
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
    .map((eq, i) => {
      if (twineEq.includes(eq)) {
        twine++;
      } else if (polishEq.includes(eq)) {
        polish++;
      } else {
        ester++;
      }
      return null;
    });
  return [ester, twine, polish]
}

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    characterName: defaultNames,
    job: dummyJobs,
    ilv: defaultIlvs,
    current: defaultEqList,
    bis: dummyBis,
    twine: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    },
    polish: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    },
  },
  reducers: {
    setInfo: (state, action) => {
      state.characterName[action.payload.memberId] = action.payload.name;
      state.job[action.payload.memberId] = action.payload.job;
      state.current[action.payload.memberId] = action.payload.current;
      state.bis[action.payload.memberId] = action.payload.bis;
      state.ilv[action.payload.memberId] = Math.floor(
        Object.keys(action.payload.current)
          .map((x) => action.payload.current[x].ilv)
          .reduce((x, y) => x + y, 0) / 12
      );
      const upgrades = calculateUpgrades(
        action.payload.current,
        action.payload.bis
      );
      state.twine[action.payload.memberId] = upgrades[1];
      state.polish[action.payload.memberId] = upgrades[2];
    },
  },
});

export const { setInfo } = memberSlice.actions;

export const selectCharacterName = (state) => state.member.characterName;

export const selectJob = (state) => state.member.job;

export const selectIlv = (state) => state.member.ilv;

export const selectCurrent = (state) => state.member.current;

export const selectBis = (state) => state.member.bis;

export const selectTwine = (state) => state.member.twine;

export const selectPolish = (state) => state.member.polish;

export default memberSlice.reducer;
