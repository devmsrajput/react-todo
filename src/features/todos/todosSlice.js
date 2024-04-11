import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  todos: null,
};

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        msg: action.payload.msg,
      };
      if (!Array.isArray(state.todos)) {
        state.todos = [];
      }
      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos?.filter((todo) =>
        todo.id === action.payload.id
          ? (todo.msg = action.payload.msg)
          : todo.msg
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos?.filter((todo) => todo.id != action.payload);
    },
    resetTodos: (state, action) => {
      state.todos = [];
    },
    fetchAllTodos: (state, action) => {
      state.todos = [...action.payload];
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, resetTodos, fetchAllTodos } =
  todosSlice.actions;
export default todosSlice.reducer;
