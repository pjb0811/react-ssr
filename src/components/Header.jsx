import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/posts">posts</Link>
        </li>
        <li>
          <Link to="/posts/1">posts/1</Link>
        </li>
      </ul>
    );
  }
}

export default Header;
