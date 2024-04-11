import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteTodo } from "../features/todos/todosSlice";
import { updater } from "../features/todos/updaterSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const term = useSelector((state) => state.updaterReducer.task);
  const dispatch = useDispatch();
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    setAllTodos(todos && todos);
  }, [todos]);

  return (
    <div className="mt-8 pb-2">
      {allTodos?.length > 0 ? (
        allTodos.map((todo) => {
          return (
            <div className="mt-2" key={todo.id}>
              <ul>
                <li className=" rounded-lg">
                  <div className="flex items-start flex-row justify-between">
                    <div className="p-2 border border-black text-black dark:border-neutral-200 dark:text-neutral-200 rounded-md w-full">
                      <p className="text-balance p-1">{todo.msg}</p>
                    </div>
                    <div className="flex ml-2">
                      <div>
                        <button
                          className="eidt text-3xl text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 hover:cursor-pointer"
                          disabled={term.work === "update" ? true : false}
                          onClick={() =>
                            dispatch(updater({ id: todo.id, work: "update" }))
                          }
                        >
                          <FaRegEdit />
                        </button>
                      </div>
                      <div>
                        <button
                          className="delete ml-1 text-3xl text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 hover:cursor-pointer"
                          disabled={term.work === "update" ? true : false}
                          onClick={() => dispatch(deleteTodo(todo.id))}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-2 border-black dark:border-neutral-200" />
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <h1 className="text-black dark:text-neutral-200">
          Nothing to show here.
        </h1>
      )}
    </div>
  );
};

export default TodoList;
