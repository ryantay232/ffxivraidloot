import { createSlice } from "@reduxjs/toolkit";

export const navBarSlice = createSlice({
  name: "navBar",
  initialState: {
    page: "StaticMembers",
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = navBarSlice.actions;

export const selectPage = (state) => state.navBar.page;

export default navBarSlice.reducer;
