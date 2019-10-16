import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';

import { useAuth0 } from 'react-auth0-spa';
import ROUTES from 'constants/routes';

import styles from './styles.module.scss';

function Logout({ className }) {
  const { logout } = useAuth0();

  function handleLogout() {
    logout({ returnTo: `${window.location.origin}${ROUTES.LOGIN}` });
  }

  return (
    <span className={`nav-link ${styles.logout} ${className}`} onClick={handleLogout}>
      <i className={`material-icons ${styles.icon}`}>power_settings_new</i> {t('buttonLogout:label')}
    </span>
  );
}

Logout.defaultProps = {
  className: ''
};

Logout.propTypes = {
  className: PropTypes.string
};

export default Logout;
