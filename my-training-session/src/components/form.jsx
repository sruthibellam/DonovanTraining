import { useState } from "react";
import { atom, useAtom } from "jotai";

const valueAtom = atom("");

function ToDoForm({ addTodo }) {
    const [value, setValue] = useAtom(valueAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log(value);
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <p>
            Add a new task to your list:
        </p> 
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
        <button type="submit" className="button">
            Add
        </button>
    </form>
  );
}

export default ToDoForm;