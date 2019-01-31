import React, { Component } from 'react';
import withLayout from './withLayout';
// import loadData from '../lib/loadData';
// import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../redux/reducers/post';

class Posts extends Component {
  componentDidMount() {
    const { PostActions, match } = this.props;

    if (window.__INIT_DATA__) {
      window.__INIT_DATA__ = null;
    } else {
      PostActions.getPost(match.url);
    }
  }

  render() {
    // const { data } = this.state;
    // const { location, match } = this.props;
    const { post } = this.props;

    return (
      <div>
        {/*
        <div>{JSON.stringify(match)}</div>
        <div>{JSON.stringify(queryString.parse(location.search))}</div>
        */}
        {post.loading && '...loading'}
        {post.error && 'error!'}
        {post.data.map((item, i) => (
          <div key={i}>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    post: state.post,
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch),
  })
)(withLayout(Posts));
