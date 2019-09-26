import React from 'react';
import { t } from 'i18next';

import { useAuth0 } from '../../../react-auth0-spa';

import styles from './styles.module.scss';

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={`card card-login ${styles.form}`}>
      <div className="card-title card-header text-center">{t('Login:login')}</div>
      <div className={`footer text-center ${styles.footer}`}>
        <button type="button" onClick={loginWithRedirect} className="btn btn-primary btn-wd btn-lg">
          {t('Login:enter')}
        </button>
      </div>
    </div>
  );
}

export default Login;
