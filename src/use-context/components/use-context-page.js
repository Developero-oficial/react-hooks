import React from 'react';

import {Button} from './button';
import {ThemeContext} from '../theme-context';
import {themes} from '../themes';

export const UseContextPage = () => (
  <>
    <h2>Hook useContext</h2>
    <h3>Ejemplo en componente clase</h3>

    <ThemeContext.Provider value={themes.vaporwave}>
      <Button>Ligth theme</Button>
      <Button>Dark theme</Button>
      <Button>Vaporware theme</Button>
    </ThemeContext.Provider>
  </>
);
