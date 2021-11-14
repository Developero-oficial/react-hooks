import React from 'react';

export const EnterKeyHook = () => {
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const handleKeydown = ({keyCode}) => {
    const enterKeyCode = 13;
    if (keyCode === enterKeyCode) {
      alert('tecla Enter presionada');
    }
  };

  return 'Presiona Enter :)';
};
