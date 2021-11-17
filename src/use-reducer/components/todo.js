/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import {initialState} from '../initial-state';
import {actionAddTodo, actionToogleTodoItem} from '../actions';
import {reducer} from '../reducer';

export const Todo = () => {
  const [todoText, setTodoText] = React.useState('');
  const [todoState, dispatch] = React.useReducer(reducer, initialState);

  const handleChange = ({target}) => setTodoText(target.value);

  const handleClick = () => {
    dispatch(
      actionAddTodo({
        id: todoState.length + 1,
        title: todoText,
      }),
    );
    setTodoText('');
  };

  const toogleTodoItem = id => {
    dispatch(actionToogleTodoItem(id));
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
