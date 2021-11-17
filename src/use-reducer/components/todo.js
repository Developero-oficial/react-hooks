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

  return (
    <>
      <p>
        Nuevo TODO:
        <input type="text" value={todoText} onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </p>
      <h2>Listado</h2>
      {todoState.map(({id, title}) => (
        <ul key={id}>
          <li>{title}</li>
        </ul>
      ))}
    </>
  );
};
