import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    characterName: "Firstname Lastname",
    job: "BLM",
    ilv: 0,
    current: {
      head: {
        name: "",
        type: "",
        ilv: 0,
      },
      body: {
        name: "",
        type: "",
        ilv: 0,
      },
      hands: {
        name: "",
        type: "",
        ilv: 0,
      },
      waist: {
        name: "",
        type: "",
        ilv: 0,
      },
      legs: {
        name: "",
        type: "",
        ilv: 0,
      },
      feet: {
        name: "",
        type: "",
        ilv: 0,
      },
      earrings: {
        name: "",
        type: "",
        ilv: 0,
      },
      necklace: {
        name: "",
        type: "",
        ilv: 0,
      },
      bracelets: {
        name: "",
        type: "",
        ilv: 0,
      },
      ring1: {
        name: "",
        type: "",
        ilv: 0,
      },
      ring2: {
        name: "",
        type: "",
        ilv: 0,
      },
    },
    bis: {
      head: {
        name: "",
        type: "",
        ilv: 0,
      },
      body: {
        name: "",
        type: "",
        ilv: 0,
      },
      hands: {
        name: "",
        type: "",
        ilv: 0,
      },
      waist: {
        name: "",
        type: "",
        ilv: 0,
      },
      legs: {
        name: "",
        type: "",
        ilv: 0,
      },
      feet: {
        name: "",
        type: "",
        ilv: 0,
      },
      earrings: {
        name: "",
        type: "",
        ilv: 0,
      },
      necklace: {
        name: "",
        type: "",
        ilv: 0,
      },
      bracelets: {
        name: "",
        type: "",
        ilv: 0,
      },
      ring1: {
        name: "",
        type: "",
        ilv: 0,
      },
      ring2: {
        name: "",
        type: "",
        ilv: 0,
      },
    },
  },
  reducers: {
    setInfo: (state, action) => {
      state.characterName = action.payload.name;
      state.job = action.payload.job;
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
