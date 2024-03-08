import { useEffect, useState } from "react";
import { ToDoProvider } from "./context/ToDoContext";
import InputForm from "./components/Form";
import TodoItem from "./components/TodoItem";
const App = () => {
  const [toDos, setToDo] = useState([]);
  console.log(toDos);
  const addToDo = (todo) => {
    setToDo((prev) => [...prev, { id: Date.now(), ...todo }]);
  };
  const updateToDo = (id, todo) => {
    setToDo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const deleteToDo = (id) => {
    setToDo((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setToDo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem("toDos"));

    if (todosFromLocalStorage && todosFromLocalStorage.length > 0) {
      setToDo(todosFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <ToDoProvider
      value={{ toDos, addToDo, deleteToDo, updateToDo, toggleComplete }}
    >
      <div className=" bg-cs vh-100 vw-100 ">
        <div className="container d-flex flex-column align-items-center justify-content-center gap-4 w-75 ">
          <h1 className=" text-uppercase text-cs p-3 mt-5">Your Todo App</h1>
          <div className="mb-1 w-100">
            <InputForm />
          </div>
          <div className="mb-4 w-100">
            {toDos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
};

export default App;
