import React from 'react';

export const Timer = () => {
  const intervalId = React.useRef();

  React.useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('done');
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return '';
};
