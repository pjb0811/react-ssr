import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const withLayout = Page => {
  return class Layout extends Component {
    render() {
      return (
        <div>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/posts">posts</Link>
            </li>
            <li>
              <Link to="/posts/1">posts/1</Link>
            </li>
            <li>
              <Link to="/posts?name=test">posts?name=test</Link>
            </li>
            <li>
              <Link to="/posts/1?name=test">posts/1?name=test</Link>
            </li>
          </ul>
          <Page {...this.props} />
        </div>
      );
    }
  };
};

export default withLayout;
