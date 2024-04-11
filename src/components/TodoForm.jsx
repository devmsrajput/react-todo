import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todos/todosSlice";
import { adder } from "../features/todos/updaterSlice";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    id: 1,
    msg: "",
  });

  const todos = useSelector((state) => state.todoReducer.todos);
  const term = useSelector((state) => state.updaterReducer.task);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!todo.msg) {
      return alert("Fields can't be empty");
    }
    if (term.work === "add") {
      dispatch(addTodo(todo));
      setTodo({
        id: 1,
        msg: "",
      });
    } else {
      dispatch(updateTodo(todo));
      dispatch(adder());
      setTodo({
        id: 1,
        msg: "",
      });
    }
  };

  useEffect(() => {
    const todo = todos?.filter((todo) => todo.id === term.id);
    if (term.work === "update") {
      setTodo({ id: todo[0].id, msg: todo[0].msg });
    }
  }, [term]);

  return (
    <div className="text-center sticky text-white pb-3">
      <div className="mt-4 flex justify-between">
        <input
          onChange={(e) => setTodo({ ...todo, msg: e.target.value })}
          className="w-96 outline-none border border-black dark:border-white rounded-md p-3 text-black placeholder:text-gray-700 dark:placeholder:text-gray-300 dark:text-white bg-inherit"
          type="text"
          placeholder="Enter your task here"
          name="todo"
          id="todo"
          value={todo.msg}
        />
        <button
          onClick={handleSubmit}
          className="ml-2 border-2 border-black p-2 text-black dark:border-neutral-200 dark:text-neutral-200  rounded-lg flex items-center"
        >
          <svg
            className="h-6 w-6 mr-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" />{" "}
            <line x1="9" y1="12" x2="15" y2="12" />{" "}
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
          <span className="uppercase">{term.work}</span>
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
