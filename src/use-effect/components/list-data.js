import React, {Component} from 'react';

import {myApi} from '../my-api';

export class ListData extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const data = await myApi.fakeFetch();
    this.setState({data});
  }

  render() {
    return this.state.data.map(({label}) => <p key={label}>{label}</p>);
  }
}
