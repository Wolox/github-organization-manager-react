import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function AlertInfo({ icon, message, type }) {
  return (
    <div className={`${styles.alert} alert alert-${type}`}>
      <i className="center-icon material-icons">{icon}</i>
      {message}
    </div>
  );
}

AlertInfo.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'danger'])
};

AlertInfo.defaultProps = {
  icon: 'check',
  message: '¡El registro se ha guardado con exito!',
  type: 'success'
};

export default AlertInfo;
