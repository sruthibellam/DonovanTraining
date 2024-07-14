
function ToDoList({ todos, setTodos }) {
    return (
        <div>
            <ul style={{listStyleType: "none"}}>
                {todos.map((todo, index) => (
                    <li key={index} style={{textAlign: "left"}}>
                        <input type="checkbox"
                            className="checkbox"
                            defaultChecked={todo.done}
                            onChange={(e) => {
                                todos[index].done = e.target.checked;
                                setTodos([...todos]);
                            }}
                        />
                        <span style={{ color: todo.done ? "green" : "" }}>
                            {todo.todoString}
                        </span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ToDoList;