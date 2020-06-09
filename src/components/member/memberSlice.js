import { createSlice } from "@reduxjs/toolkit";

import {
  defaultName,
  defaultJob,
  defaultIlv,
  defaultEq,
} from "../../app/defaultVars.js";
export const memberSlice = createSlice({
  name: "member",
  initialState: {
    characterName: defaultName,
    job: defaultJob,
    ilv: defaultIlv,
    current: {
      mainArm: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      head: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      body: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      hands: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      waist: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      legs: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      feet: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      earrings: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      necklace: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      bracelets: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      ring1: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      ring2: {
        type: defaultEq,
        ilv: defaultIlv,
      },
    },
    bis: {
      mainArm: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      head: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      body: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      hands: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      waist: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      legs: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      feet: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      earrings: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      necklace: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      bracelets: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      ring1: {
        type: defaultEq,
        ilv: defaultIlv,
      },
      ring2: {
        type: defaultEq,
        ilv: defaultIlv,
      },
    },
  },
  reducers: {
    setInfo: (state, action) => {
      state.characterName = action.payload.name;
      state.job = action.payload.job;
      state.current = action.payload.current;
      state.bis = action.payload.bis;
    },
    setIlv: (state, action) => {
      state.ilv = action.payload;
    },
  },
});

export const { setInfo, setIlv } = memberSlice.actions;

export const selectCharacterName = (state) => state.member.characterName;

export const selectJob = (state) => state.member.job;

export const selectIlv = (state) => state.member.ilv;

export const selectCurrent = (state) => state.member.current;

export const selectBis = (state) => state.member.bis;

export default memberSlice.reducer;
