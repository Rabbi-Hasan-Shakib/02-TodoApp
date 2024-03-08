import { UseToDo } from "../context/ToDoContext";
import { useState } from "react";

const InputForm = () => {
  const { addToDo } = UseToDo();
  const [toDo, setToDo] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!toDo) return;
    addToDo({ text: toDo, completed: false });
    setToDo("");
  };
  console.log(toDo);
  return (
    <form onSubmit={add} className="mb-3 w-100 input-group ">
      <input
        type="text"
        className="form-control py-3"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        Add
      </button>
    </form>
  );
};

export default InputForm;
