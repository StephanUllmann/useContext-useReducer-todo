import { createContext, useReducer, useState } from 'react';

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [filter, setFilter] = useState('all');

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const newState = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.completed) return true;
    if (filter === 'active' && !todo.completed) return true;
    return false;
  });
  return (
    <TodoContext.Provider value={{ setTodos, setFilter, todos: filteredTodos, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// const initialState = {
//   todos: JSON.parse(localStorage.getItem('todos')) || [],
//   filteredTodos: JSON.parse(localStorage.getItem('todos')) || [],
//   filter: 'all', // 'all', 'completed', 'active'
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO': {
//       const newTodo = { id: Date.now(), text: action.payload, completed: false };
//       const todos = [...state.todos, newTodo];

//       const filteredTodos = todos.filter((todo) => {
//         if (state.filter === 'all') return true;
//         if (state.filter === 'completed' && todo.completed) return true;
//         if (state.filter === 'active' && !todo.completed) return true;
//         return false;
//       });

//       localStorage.setItem('todos', JSON.stringify(todos));
//       return { ...state, todos, filteredTodos };
//     }

//     case 'FILTER_TODOS': {
//       const filter = action.payload;
//       const filteredTodos = state.todos.filter((todo) => {
//         if (filter === 'all') return true;
//         if (filter === 'completed' && todo.completed) return true;
//         if (filter === 'active' && !todo.completed) return true;
//         return false;
//       });
//       return { ...state, filteredTodos, filter };
//     }

//     case 'TOGGLE_TODO': {
//       const todos = state.todos.map((todo) => {
//         if (todo.id === action.payload) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       });
//       const filteredTodos = todos.filter((todo) => {
//         if (state.filter === 'all') return true;
//         if (state.filter === 'completed' && todo.completed) return true;
//         if (state.filter === 'active' && !todo.completed) return true;
//         return false;
//       });
//       localStorage.setItem('todos', JSON.stringify(todos));
//       return { ...state, todos, filteredTodos };
//     }

//     default:
//       return state;
//   }
// };

// export default function TodoContextProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // dispatch({
//   //   type: "IRGENDWAS",
//   //   payload: 123
//   // })

//   const addTodo = (text) => {
//     dispatch({
//       type: 'ADD_TODO',
//       payload: text,
//     });
//   };

//   const filterTodos = (filter) => {
//     dispatch({
//       type: 'FILTER_TODOS',
//       payload: filter,
//     });
//   };

//   const toggleTodo = (id) => {
//     dispatch({
//       type: 'TOGGLE_TODO',
//       payload: id,
//     });
//   };

//   return (
//     <TodoContext.Provider value={{ addTodo, filterTodos, todos: state.filteredTodos, toggleTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// }
