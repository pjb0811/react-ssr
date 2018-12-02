import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Layout = Page => {
  return class Layout extends Component {
    render() {
      return (
        <div>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/posts">posts</NavLink>
            </li>
            <li>
              <NavLink to="/posts/1">posts/1</NavLink>
            </li>
          </ul>
          <Page {...this.props} />
        </div>
      );
    }
  };
};

export default Layout;
