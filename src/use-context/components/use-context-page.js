import React from 'react';

import {Button} from './button';
import {ThemeContext} from '../theme-context';
import {themes} from '../themes';

export const UseContextPage = () => {
  const [currentTheme, setCurrentTheme] = React.useState(themes.dark);

  const handleClick = React.useCallback(theme => setCurrentTheme(theme), []);

  const value = {
    theme: currentTheme,
    setCurrentTheme,
  };

  return (
    <>
      <h2>Hook useContext</h2>
      <h3>Ejemplo</h3>

      <ThemeContext.Provider value={value}>
        <Button>Ligth theme</Button>
        <Button onClick={() => handleClick(themes.dark)}>Dark theme</Button>
        <Button onClick={() => handleClick(themes.vaporwave)}>
          Vaporware theme
        </Button>
      </ThemeContext.Provider>
    </>
  );
};
