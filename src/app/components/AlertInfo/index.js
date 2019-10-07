import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function AlertInfo({ icon, message }) {
  return (
    <div className={`${styles.alert} alert alert-success`}>
      <div className="alert-icon">
        <i className="material-icons">{icon}</i>
      </div>
      {message}
    </div>
  );
}

AlertInfo.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string
};

AlertInfo.defaultProps = {
  icon: 'check',
  message: '¡Los miembros se agregaron!'
};

export default AlertInfo;
