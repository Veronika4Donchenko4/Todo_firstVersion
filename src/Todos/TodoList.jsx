import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="">
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
