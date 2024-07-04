import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const ToDoItem = ({ todo }) => {
  const { toggleTodo } = useContext(TodoContext);

  return (
    <li className='flex items-center mb-2'>
      <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} className='mr-2' />
      <span className={todo.completed ? 'line-through text-gray-400' : ''}>{todo.text}</span>
    </li>
  );
};

export default ToDoItem;
