import React from 'react';
import {ThemeContext} from '../theme-context';

export class Button extends React.Component {
  render() {
    const style = {
      border: '1px solid',
      borderRadius: 5,
      color: this.context.color,
      backgroundColor: this.context.background,
    };
    return <button style={style} {...this.props} />;
  }
}

Button.contextType = ThemeContext;
