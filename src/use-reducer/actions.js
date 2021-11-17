import {TOOGLE_TODO_ITEM, ADD_TODO_ITEM} from './action-types';

export const actionAddTodo = ({id, title}) => ({
  type: ADD_TODO_ITEM,
  payload: {
    id,
    title,
    isDone: false,
  },
});

export const actionToogleTodoItem = id => ({
  type: TOOGLE_TODO_ITEM,
  payload: {
    id,
  },
});
