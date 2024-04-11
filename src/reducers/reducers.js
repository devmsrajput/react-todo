import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todosSlice";
import updaterReducer from "../features/todos/updaterSlice";
import themeReducer from "../features/theme/themeSlice";

const rootReducer = combineReducers({
  todoReducer,
  updaterReducer,
  themeReducer,
});

export default rootReducer;
