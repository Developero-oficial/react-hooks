import React from 'react';

export class ClassCounter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = () => this.setState({count: this.state.count + 1});

  render() {
    const {count} = this.state;
    return (
      <>
        <p>Clicks: {count}</p>
        <button onClick={this.handleClick}>Clickeame</button>
      </>
    );
  }
}
