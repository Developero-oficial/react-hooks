import React from 'react';
import {ThemeContext} from '../theme-context';
import {themes} from '../themes';

export const Button = props => {
  const {dispatch, theme} = React.useContext(ThemeContext);

  const handleClickDefault = () => {
    dispatch({type: 'SET_CURRENT_THEME', payload: themes.light});
  };

  const handleClick = props.onClick ? props.onClick : handleClickDefault;

  const style = {
    border: '1px solid',
    borderRadius: 5,
    color: theme.color,
    backgroundColor: theme.background,
  };

  return <button style={style} {...props} onClick={handleClick} />;
};
