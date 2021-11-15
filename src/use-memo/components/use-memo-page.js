import React from 'react';

const createArray = length => {
  let i = length;
  const arr = [];
  while (i--) {
    arr[i] = 0;
  }

  return arr;
};

const expensiveCalc = myArray => {
  console.log('expensiveCalc ejecutado');
  let counter = 0;
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
      counter++;
    }
  }
  return counter;
};

const MyComponent = ({someList}) => {
  const result = React.useMemo(() => expensiveCalc(someList), [someList]);

  return <p>Iteraciones: {result.toLocaleString()}</p>;
};

const list = createArray(10000);

export const UseMemoPage = () => {
  const [foo, setFoo] = React.useState('');

  const handleChange = ({target}) => setFoo(target.value);

  return (
    <>
      <h1>Hook useMemo</h1>
      <h2>useMemo - Sin aplicar</h2>
      <p>Escribe para hacer re render.</p>
      <input value={foo} onChange={handleChange} />
      <MyComponent someList={list} />
    </>
  );
};
