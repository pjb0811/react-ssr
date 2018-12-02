import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
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
    );
  }
}

export default Header;
