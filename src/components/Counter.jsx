import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../redux/reducers/counter';

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
    const { counter, CounterActions } = this.props;

    return (
      <div>
        <h1>{counter.count}</h1>
        <button
          onClick={() => {
            CounterActions.increment();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            CounterActions.decrement();
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    counter: state.counter,
  }),
  dispatch => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
  })
)(Counter);
