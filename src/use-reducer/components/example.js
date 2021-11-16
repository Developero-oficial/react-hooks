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

export const Example = () => {
  const [user, setUser] = React.useState(initialState);

  React.useEffect(() => {
    setUser({
      ...user,
      foo: {
        ...user.foo,
        foo1: {...user.foo.foo1, foo2: {...user.foo.foo1.foo2, name: 'test'}},
      },
    });
  }, []);

  return `Example: ${JSON.stringify(user)}`;
};
