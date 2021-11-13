import React from 'react';

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('valor de count', count);
  }, [count]);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <p>Clicks: {count}</p>
      <button onClick={handleClick}>Clickeame</button>
    </>
  );
};
