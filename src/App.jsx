import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ButtonControl from "./components/ButtonControl";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos } from "./features/todos/todosSlice";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.themeReducer.themeMode);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos?.length > 0) {
      dispatch(fetchAllTodos(todos));
    }
  }, []);

  useEffect(() => {
    if (todos !== null) {
      localStorage.setItem("todos", JSON.stringify([...todos]));
    }
  }, [todos]);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <div className="w-full h-screen bg-[#f0f0f0] dark:bg-neutral-900 pt-8">
        <div className="relative w-[95%] sm:w-[80%] overflow-hidden bg-[#e9e9e9] shadow-lg border border-black dark:border-white dark:bg-slate-800 h-[90vh] rounded-md px-3 pt-3 max-w-md mx-auto">
          <div className="flex justify-between">
            <div className="heading">
              <h1 className="text-3xl text-black dark:text-white font-bold">
                ToDo App
              </h1>
              <div>
                <small className="dark:text-white">
                  By:{" "}
                  <a href="https://github.com/devmsrajput" target="_blank">
                    Mahendra Singh
                  </a>
                </small>
              </div>
            </div>
            <div className="btn">
              <ThemeSwitcher />
            </div>
          </div>
          <TodoForm />
          <div className="h-[70%] overflow-auto">
            <TodoList />
          </div>
          <ButtonControl />
        </div>
      </div>
    </>
  );
}

export default App;
