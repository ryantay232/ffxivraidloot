import { createSlice } from "@reduxjs/toolkit";

import {
  defaultName,
  defaultJob,
  defaultIlv,
  defaultEqStructure,
} from "../../app/defaultVars.js";

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    characterName: {
      0: defaultName,
      1: defaultName,
      2: defaultName,
      3: defaultName,
      4: defaultName,
      5: defaultName,
      6: defaultName,
      7: defaultName,
    },
    job: {
      0: defaultJob,
      1: defaultJob,
      2: defaultJob,
      3: defaultJob,
      4: defaultJob,
      5: defaultJob,
      6: defaultJob,
      7: defaultJob,
    },
    ilv: {
      0: defaultIlv,
      1: defaultIlv,
      2: defaultIlv,
      3: defaultIlv,
      4: defaultIlv,
      5: defaultIlv,
      6: defaultIlv,
      7: defaultIlv,
    },
    current: {
      0: Object.assign({}, defaultEqStructure),
      1: Object.assign({}, defaultEqStructure),
      2: Object.assign({}, defaultEqStructure),
      3: Object.assign({}, defaultEqStructure),
      4: Object.assign({}, defaultEqStructure),
      5: Object.assign({}, defaultEqStructure),
      6: Object.assign({}, defaultEqStructure),
      7: Object.assign({}, defaultEqStructure),
    },
    bis: {
      0: Object.assign({}, defaultEqStructure),
      1: Object.assign({}, defaultEqStructure),
      2: Object.assign({}, defaultEqStructure),
      3: Object.assign({}, defaultEqStructure),
      4: Object.assign({}, defaultEqStructure),
      5: Object.assign({}, defaultEqStructure),
      6: Object.assign({}, defaultEqStructure),
      7: Object.assign({}, defaultEqStructure),
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
    },
  },
});

export const { setInfo } = memberSlice.actions;

export const selectCharacterName = (state) => state.member.characterName;

export const selectJob = (state) => state.member.job;

export const selectIlv = (state) => state.member.ilv;

export const selectCurrent = (state) => state.member.current;

export const selectBis = (state) => state.member.bis;

export default memberSlice.reducer;
