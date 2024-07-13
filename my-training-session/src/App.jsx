import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoForm from './components/form'
import ToDoList from './components/todolist'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <header className="App-header">
        <ToDoForm addTodo={addTodo} />
        <ToDoList todos={todos} />
      </header>
    </div>
  )
}

export default App
