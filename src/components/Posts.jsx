import React, { Component } from 'react';
import Header from './Header';
import loadData from '../lib/loadData';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.staticContext ? props.staticContext.data : {}
    };
  }

  async componentDidMount() {
    const { url } = this.props.match;
    const data = await loadData(url);
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <Header />
        <div>posts</div>
        <div>{JSON.stringify(data)}</div>
      </div>
    );
  }
}

export default Posts;
