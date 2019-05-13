import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';

const Header = () => (
  <div className={styles.root}>
    {console.log('header')}
    <NavLink exact activeClassName={styles['link-active']} className={styles.link} to="/">Home</NavLink>
    <NavLink exact activeClassName={styles['link-active']} className={styles.link} to="/about">About</NavLink>
    <NavLink exact activeClassName={styles['link-active']} className={styles.link} to="/user-page">User Page</NavLink>
    <NavLink exact activeClassName={styles['link-active']} className={styles.link} to="/testing">Testing ground</NavLink>
  </div>
);

export default memo(Header);
