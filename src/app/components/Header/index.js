import React from 'react';

import Menu from '~components/Menu';

import styles from './styles.module.scss';

function Header() {
  return (
    <div className={`page-header ${styles.pageHeader}`} data-parallax="true">
      <Menu />
    </div>
  );
}

export default Header;
