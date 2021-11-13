import React, {Component} from 'react';

import {myApi} from '../my-api';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export class ListData extends Component {
  state = {
    data: [],
    userId: 1,
  };

  async componentDidMount() {
    const data = await myApi.fakeFetch(this.state.userId);
    this.setState({data});
  }

  async componentDidUpdate(prevProps, prevState) {
    const {userId} = this.state;

    if (prevState.userId !== userId) {
      const data = await myApi.fakeFetch(userId);
      this.setState({
        data,
      });
    }
  }

  handleUserId = () => {
    const randomId = getRandomInt(1, 5);
    this.setState({userId: randomId});
  };

  render() {
    return (
      <>
        <h3>User ID: {this.state.userId}</h3>
        {this.state.data.map(({label}) => (
          <p key={label}>{label}</p>
        ))}
        <button onClick={this.handleUserId}>Update user id</button>
      </>
    );
  }
}
