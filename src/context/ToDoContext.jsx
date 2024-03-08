import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  toDos: [
    {
      id: 1,
      text: "hello",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  toggleComplete: (id) => {},
});

export const UseToDo = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("useToDo must be used within a ToDoProvider");
  }
  return context;
};

export const ToDoProvider = ToDoContext.Provider;
