import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    lightMode: (state, action) => {
      state.themeMode = "light";
    },
    darkMode: (state, action) => {
      state.themeMode = "dark";
    },
  },
});

export const { lightMode, darkMode } = themeSlice.actions;
export default themeSlice.reducer;
