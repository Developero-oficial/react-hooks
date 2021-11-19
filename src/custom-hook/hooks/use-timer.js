import React from 'react';

export const useTimer = () => {
  const intervalId = React.useRef();

  React.useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('done');
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);
};
