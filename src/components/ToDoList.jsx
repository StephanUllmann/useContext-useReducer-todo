import { useContext } from 'react';
import ToDoItem from './ToDoItem';
import { TodoContext } from '../contexts/TodoContext';

const ToDoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
