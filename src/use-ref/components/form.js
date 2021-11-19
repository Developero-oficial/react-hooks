import React from 'react';

export const Form = () => {
  const inputRef = React.useRef();

  React.useEffect(() => inputRef.current.focus(), []);

  return <input type="text" ref={inputRef} />;
};
