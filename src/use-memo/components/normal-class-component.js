import React from 'react';

export class NormalClassComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    // retorna true si son diferentes
    // si son diferentes, renderiza de nuevo
    return nextProps.title !== this.props.title;
  }

  render() {
    return <h1>{this.props.title.toUpperCase()}</h1>;
  }
}
