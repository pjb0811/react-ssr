import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as counterActions from '../redux/reducers/counter';

@inject('counter')
@observer
class Counter extends Component {
  /*
  static getDerivedStateFromProps(nextProps) {
    const { counter, PostActions } = nextProps;

    PostActions.getPost(`/posts/${counter}`);

    return null;
  }
  */

  componentDidMount() {
    if (window.__INIT_DATA__) {
      window.__INIT_DATA__ = null;
    }
  }

  render() {
    const { counter } = this.props;

    return (
      <div>
        <h1>{counter.count}</h1>
        <button
          onClick={() => {
            counter.increment();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            counter.decrement();
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
