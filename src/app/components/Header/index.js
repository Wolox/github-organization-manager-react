import React from 'react';

import styles from './styles.module.scss';

import Menu from '~components/Menu';

function Header() {
  return (
    <>
      <Menu />
      <div className={`page-header ${styles.pageHeader}`} data-parallax="true" />
    </>
  );
}

export default Header;
