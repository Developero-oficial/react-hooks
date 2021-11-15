import React from 'react';

export class PureComponent extends React.PureComponent {
  render() {
    return <h1>{this.props.title.toUpperCase()}</h1>;
  }
}
