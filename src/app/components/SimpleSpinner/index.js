import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import spinner from './spinner.svg';

function SimpleSpinner({ center }) {
  return (
    <div className={center ? styles.container : ''}>
      <img src={spinner} alt="" className={styles.spinnero} />
    </div>
  );
}
SimpleSpinner.propTypes = {
  center: PropTypes.bool
};
export default SimpleSpinner;
