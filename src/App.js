import { useState } from 'react';
import TodoList from './Todos/TodoList';
import TodoForm from './Todos/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };
  return (
    <div className="App">
      <h1 >Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;