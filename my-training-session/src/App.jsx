import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const addTodo = () => {
    setTodos([...todos, todo])
    setTodo('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="react logo" />
        <img src={viteLogo} className="App-logo" alt="vite logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <div>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
