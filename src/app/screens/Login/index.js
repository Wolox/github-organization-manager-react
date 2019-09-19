import React from 'react';

import Login from './layout';
import styles from './styles.module.scss';

function LoginContainer() {
  return (
    <div className={`page-header header-filter ${styles.pageHeader}`}>
      <div className="container col-lg-4 col-md-6 ml-auto mr-auto">
        <Login />
      </div>
    </div>
  );
}

export default LoginContainer;
