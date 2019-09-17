import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';

import InputLabelNew from '../../components/InputLabelNew';
import Routes from '../../../constants/routes';
import { useAuth0 } from '../../../react-auth0-spa';

import { FIELDS } from './constants';
import styles from './styles.module.scss';

function Login({ onLogin }) {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="card card-login">
      <form onSubmit={() => loginWithRedirect({})} className={`${styles.form}`}>
        <div className="card-header text-center">
          <h4 className="card-title">{t('Login:login')}</h4>
        </div>
        {/* <div className="card-body">
           <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">mail</i>
              </span>
            </div>
            <InputLabelNew
              label={t('Login:email')}
              name={FIELDS.email}
              inputId={FIELDS.email}
              dataFor={FIELDS.email}
              inputType="email"
              inputClassName="form-control"
              placeholder={t('Login:emailPlaceholder')}
              handleChange={onEmailChange}
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">lock_outline</i>
              </span>
            </div>
            <InputLabelNew
              label={t('Login:password')}
              name={FIELDS.password}
              inputId={FIELDS.password}
              dataFor={FIELDS.password}
              inputType="password"
              inputClassName="form-control"
              placeholder={t('Login:passwordPlaceholder')}
              handleChange={onPasswordChange}
            />
          </div>
        </div>*/}
        <div className={`footer text-center ${styles.footer}`}>
          <button type="submit" className="btn btn-primary btn-wd btn-lg">
            {t('Login:enter')}
          </button>
          <br />
          {/* <a href={Routes.RECOVER_PASSWORD}>{t('Login:forgotPassword')}</a> */}
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;
