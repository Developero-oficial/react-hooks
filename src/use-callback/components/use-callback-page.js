import React from 'react';

const Example = ({cb}) => {
  React.useEffect(() => {
    console.log('cb changed');
  }, [cb]);

  return (
    <ul>
      <li>true===true //true</li>
      <li>false===false //true </li>
      <li>1===1 //true </li>
      <li>'a'==='a' //true </li>
      <li>
        {}==={} //false{' '}
      </li>
      <li>[]===[] //false </li>
      <li>
        ()=>{}===()=>{} //false{' '}
      </li>
      <li>const z={}</li>
      <li>z===z //true</li>
    </ul>
  );
};

export const UseCallbackPage = () => {
  const [counter, setCounter] = React.useState(0);

  const handleExample = React.useCallback(() => {}, []);

  const handleClick = () => setCounter(counter + 1);

  return (
    <>
      <h2>Hook useCallback</h2>
      <p>Igualdad referencial en JS:</p>

      <Example cb={handleExample} />

      <button onClick={handleClick}>handle re render</button>
      <p>re render times: {counter}</p>
    </>
  );
};
