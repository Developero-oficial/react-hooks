/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const initialState = [
  {
    id: 1,
    title: 'terminar esta sección',
    isDone: false,
  },
];

const reducer = (state, action) => {
  if (action.type === 'ADD_TODO_ITEM') {
    const {id, title, isDone} = action.payload;
    return [...state, {id, title, isDone}];
  }

  if (action.type === 'TOOGLE_TODO_ITEM') {
    const {id: inputId} = action.payload;
    const newState = state.map(({id, title, isDone}) => {
      if (id === inputId) {
        return {
          title,
          id,
          isDone: !isDone,
        };
      }
      return {
        title,
        id,
        isDone,
      };
    });
    return newState;
  }

  return state;
};

export const Todo = () => {
  const [todoText, setTodoText] = React.useState('');
  const [todoState, dispatch] = React.useReducer(reducer, initialState);

  const handleChange = ({target}) => setTodoText(target.value);

  const handleClick = () => {
    const action = {
      type: 'ADD_TODO_ITEM',
      payload: {
        id: todoState.length + 1,
        title: todoText,
        isDone: false,
      },
    };

    dispatch(action);
    setTodoText('');
  };

  const toogleTodoItem = id => {
    const action = {
      type: 'TOOGLE_TODO_ITEM',
      payload: {
        id,
      },
    };
    dispatch(action);
  };

  return (
    <>
      <p>
        Nuevo TODO:
        <input type="text" value={todoText} onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </p>
      <h2>Listado</h2>
      {todoState.map(({id, title, isDone}) => (
        <ul key={id}>
          <li
            style={{
              cursor: 'pointer',
              textDecoration: isDone ? 'line-through' : 'inherit',
            }}
            onClick={() => toogleTodoItem(id)}
          >
            {title}
          </li>
        </ul>
      ))}
    </>
  );
};
