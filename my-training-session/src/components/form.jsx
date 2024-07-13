import { useState } from "react";

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    console.log(value);
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
        Add a new task:
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