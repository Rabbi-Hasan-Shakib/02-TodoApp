import { useState } from "react";
import { UseToDo } from "../context/ToDoContext";

const TodoItem = (props) => {
  console.log(props);
  let todo = props.todo;

  const [toDoMsg, setToDoMsg] = useState(todo.text);
  const [isToDoEditable, setIsToDoEditable] = useState(false);
  const { updateToDo, deleteToDo, toggleComplete } = UseToDo();
  const editToDo = () => {
    updateToDo(todo.id, { ...todo, text: toDoMsg });
    setIsToDoEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={` mb-3 d-flex align-items-center justify-content-between bg-white gap-5 py-2 px-5 rounded ${
        todo.completed ? "bg-warning" : "bg-danger"
      }`}
    >
      <div className="d-flex gap-3 ">
        <input
          type="checkbox"
          name=""
          id=""
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`form-control w-cs ${
            isToDoEditable ? "border" : "border-0"
          } ${todo.completed ? "text-decoration-line-through" : ""} `}
          value={toDoMsg}
          onChange={(e) => setToDoMsg(e.target.value)}
          readOnly={!isToDoEditable}
        />
      </div>
      <div className="d-flex gap-3">
        <button
          className="btn bg-secondary rounded"
          onClick={() => {
            if (todo.completed) return;

            if (isToDoEditable) {
              editToDo();
            } else setIsToDoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isToDoEditable ? "📁" : "✏️"}
        </button>
        <button
          onClick={() => deleteToDo(todo.id)}
          className="btn bg-secondary rounded"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
