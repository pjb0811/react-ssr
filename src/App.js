import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    res: {}
  };

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    this.setState({
      res
    });
  }

  render() {
    const { res } = this.state;

    return <div className="App">{JSON.stringify(res.data)}</div>;
  }
}

export default App;
