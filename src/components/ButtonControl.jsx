import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetTodos } from "../features/todos/todosSlice";

const ButtonControl = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);

  const handleReset = (e) => {
    if (!todos?.length > 0) {
      return alert("No notes to clear.");
    }
    const bool = confirm("Are your sure to reset all notes?");
    if (bool) {
      dispatch(resetTodos());
    } else {
      return null;
    }
  };

  return (
    <div className="mt-3 sticky bg-inherit py-2 bottom-0 w-full flex">
      <button className="rounded-md font-medium border w-full border-black p-2 text-black dark:border-neutral-200 dark:text-neutral-200">
        Clear Completed Task
      </button>
      <button
        onClick={handleReset}
        className="rounded-md ml-2 font-medium border w-full border-black p-2 text-black dark:border-neutral-200 dark:text-neutral-200"
      >
        Reset Todo List
      </button>
    </div>
  );
};

export default ButtonControl;
