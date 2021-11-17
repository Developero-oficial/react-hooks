import React from 'react';

import {Button} from './button';
import {ThemeContext} from '../theme-context';
import {themes} from '../themes';

const reducer = (state, action) => {
  if (action.type === 'SET_CURRENT_THEME') {
    return action.payload;
  }

  // font-size...

  // border size...

  // N style change...

  return state;
};

export const UseContextPage = () => {
  const [currentTheme, dispatch] = React.useReducer(reducer, themes.dark);

  const value = {
    theme: currentTheme,
    dispatch,
  };

  return (
    <>
      <h2>Hook useContext</h2>
      <h3>Ejemplo</h3>

      <ThemeContext.Provider value={value}>
        <Button>Ligth theme</Button>
        <Button
          onClick={() =>
            dispatch({type: 'SET_CURRENT_THEME', payload: themes.dark})
          }
        >
          Dark theme
        </Button>
        <Button
          onClick={() =>
            dispatch({type: 'SET_CURRENT_THEME', payload: themes.vaporwave})
          }
        >
          Vaporware theme
        </Button>
      </ThemeContext.Provider>
    </>
  );
};
