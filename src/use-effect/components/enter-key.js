import React from 'react';

export class EnterKey extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = ({keyCode}) => {
    const enterKeyCode = 13;
    if (keyCode === enterKeyCode) {
      alert('tecla Enter presionada');
    }
  };

  render() {
    return 'Presiona Enter :)';
  }
}
