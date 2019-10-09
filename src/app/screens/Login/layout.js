import React from 'react';
import { t } from 'i18next';
import { Redirect } from 'react-router';

import { useAuth0 } from 'react-auth0-spa';
import ROUTES from '~constants/routes';

import styles from './styles.module.scss';

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Redirect to={ROUTES} />;
  }

  return (
    <div className={`card card-login ${styles.form}`}>
      <span className="card-title card-header text-center">{t('Login:login')}</span>
      <div className={`footer text-center ${styles.footer}`}>
        <button type="button" onClick={loginWithRedirect} className="btn btn-primary btn-wd btn-lg">
          {t('Login:enter')}
        </button>
      </div>
    </div>
  );
}

export default Login;
