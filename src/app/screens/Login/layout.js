import React, { Component } from 'react';
import { t } from 'i18next';

import { useAuth0 } from '../../../react-auth0-spa';

import styles from './styles.module.scss';

class Login extends Component {
  handleOnSubmit = () => {
    const { loginWithRedirect } = useAuth0();
    loginWithRedirect({});
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className={`card card-login ${styles.form}`}>
        <div className="card-header text-center">
          <h4 className="card-title">{t('Login:login')}</h4>
        </div>
        <div className={`footer text-center ${styles.footer}`}>
          <button type="submit" className="btn btn-primary btn-wd btn-lg">
            {t('Login:enter')}
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
