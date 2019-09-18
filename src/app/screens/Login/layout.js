import React from 'react';
import { t } from 'i18next';

import { useAuth0 } from '../../../react-auth0-spa';

import styles from './styles.module.scss';

class Login {
  handleOnSubmit = () => {
    const { loginWithRedirect } = useAuth0();
    loginWithRedirect({});
  };

  render() {
    return (
      <div className="card card-login">
        <form onSubmit={this.handleOnSubmit} className={`${styles.form}`}>
          <div className="card-header text-center">
            <h4 className="card-title">{t('Login:login')}</h4>
          </div>
          <div className={`footer text-center ${styles.footer}`}>
            <button type="submit" className="btn btn-primary btn-wd btn-lg">
              {t('Login:enter')}
            </button>
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
