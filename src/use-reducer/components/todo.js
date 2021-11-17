import React from 'react';

const initialState = [
  {
    id: 1,
    title: 'terminar esta sección',
    isDone: false,
  },
];

const reducer = state => {
  return state;
};

export const Todo = () => {
  const [todoText, setTodoText] = React.useState('');
  const [todoState, dispatch] = React.useReducer(reducer, initialState);

  const handleChange = ({target}) => setTodoText(target.value);

  return (
    <>
      <p>
        Nuevo TODO:
        <input type="text" value={todoText} onChange={handleChange} />
        <button>Agregar</button>
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
