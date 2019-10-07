import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function AlertInfo({ icon, message }) {
  return (
    <div className={`${styles.alert} alert alert-success`}>
      <i className="center-icon material-icons">{icon}</i>
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
  message: '¡El registro se ha guardado con exito!'
};

export default AlertInfo;
