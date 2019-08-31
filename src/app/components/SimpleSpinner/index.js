import React from 'react';
import { string } from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';
import spinner from './spinner.svg';

function SimpleSpinner({ className }) {
  return (
    <div className="container">
      <img src={spinner} alt="" className={styles.spinnero} />
    </div>
  );
}

SimpleSpinner.propTypes = {
  className: string,
  containerClassName: string
};

export default SimpleSpinner;
