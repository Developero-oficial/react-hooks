import {TOOGLE_TODO_ITEM, ADD_TODO_ITEM} from './action-types';

export const reducer = (state, action) => {
  if (action.type === ADD_TODO_ITEM) {
    const {id, title, isDone} = action.payload;
    return [...state, {id, title, isDone}];
  }

  if (action.type === TOOGLE_TODO_ITEM) {
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
