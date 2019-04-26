import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const Header = () => (
  <div className="root">
    <NavLink exact activeClassName="link-active" className="link" to="/">Home</NavLink>
    <NavLink exact activeClassName="link-active" className="link" to="/about">About</NavLink>
    <NavLink exact activeClassName="link-active" className="link" to="/user-page">User Page</NavLink>
    <NavLink exact activeClassName="link-active" className="link" to="/testing">Testing ground</NavLink>
  </div>
);

export default Header;
