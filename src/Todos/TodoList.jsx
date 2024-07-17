import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div className="">
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
