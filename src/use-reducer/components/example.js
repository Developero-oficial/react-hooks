import React from 'react';

const initialState = {
  name: '',
  age: '',
  address: {addres1: '', address2: ''},
  foo: {
    foo1: {
      foo2: {
        name: '',
        test: '',
      },
      new: {},
    },
  },
};

const reducer = (state, action) => {
  if (action.type === 'UPDATE_NAME') {
    return {...state, name: action.payload.name};
  }

  return state;
};

export const Example = () => {
  const [user, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const action = {
      type: 'UPDATE_NAME',
      payload: {
        name: 'john doe',
      },
    };

    dispatch(action);
  }, []);

  return `Example: ${JSON.stringify(user)}`;
};
