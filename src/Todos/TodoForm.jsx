import { useState } from 'react';
import style from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
