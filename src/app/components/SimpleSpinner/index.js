import React from 'react';

import styles from './styles.module.scss';
import spinner from './spinner.svg';

function SimpleSpinner() {
  return (
    <div className={styles.container}>
      <img src={spinner} alt="" className={styles.spinnero} />
    </div>
  );
}

export default SimpleSpinner;
