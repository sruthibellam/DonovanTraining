import React, { useRef } from "react";

function ToDoList({ todos, setTodos }) {
  const colors = useRef([]);
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              className="checkbox"
              defaultChecked={todo.done}
              onChange={(e) => {
                todos[index].done = e.target.checked;
                setTodos([...todos]);
              }}
            />
            <span
              style={{
                color: todo.done ? "green" : colors.current[index] || "",
              }}
            >
              {/* create a drop down list */}
              <select
                name="priority"
                id="priority"
                onChange={(e) => {
                  colors.current[index] = e.target.value;
                  setTodos([...todos]);
                }}
                defaultValue="default"
              >
                <option value="default" disabled hidden></option>
                <option value="blue" style={{ color: "blue" }}>
                  B
                </option>
                <option value="yellow" style={{ color: "yellow" }}>
                  Y
                </option>
              </select>
              {todo.todoString}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
