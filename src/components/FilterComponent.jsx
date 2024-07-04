import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const FilterComponent = () => {
  const { setFilter } = useContext(TodoContext);

  const filterTodos = (filter) => {
    setFilter(filter);
  };

  // for useReducer
  // const { filterTodos } = useContext(TodoContext);

  return (
    <div className='mb-4 flex space-x-2'>
      <button onClick={() => filterTodos('all')} className='bg-gray-200 px-3 py-1 rounded'>
        All
      </button>
      <button onClick={() => filterTodos('active')} className='bg-gray-200 px-3 py-1 rounded'>
        Active
      </button>
      <button onClick={() => filterTodos('completed')} className='bg-gray-200 px-3 py-1 rounded'>
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
