import { createSlice } from "@reduxjs/toolkit";

export const updateSlice = createSlice({
  name: "tasks",
  initialState: {
    task: { work: "add", id: "1" },
  },
  reducers: {
    updater: (state, action) => {
      state.task.id = action.payload.id;
      state.task.work = action.payload.work;
    },
    adder: (state, action) => {
      state.task.id = "1";
      state.task.work = "add";
    },
  },
});

export const { updater, adder } = updateSlice.actions;
export default updateSlice.reducer;
