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
    characterName: defaultName,
    job: defaultJob,
    ilv: defaultIlv,
    current: Object.assign({}, defaultEqStructure),
    bis: Object.assign({}, defaultEqStructure),
  },
  reducers: {
    setInfo: (state, action) => {
      state.characterName = action.payload.name;
      state.job = action.payload.job;
      state.current = action.payload.current;
      state.bis = action.payload.bis;
      state.ilv = Math.floor(
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
