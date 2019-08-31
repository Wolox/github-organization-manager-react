import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';

import InputLabel from '../../components/InputLabel';
import Checkbox from '../../components/Checkbox';

import { TECHNOLOGIES } from './constants';
import styles from './styles.module.scss';

function RepoCreation({ handleSubmit, repoCreated }) {
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={handleSubmit}>
      <div className="column center m-bottom-3">
        <h2 className="m-bottom-1">{t('Login:login')}</h2>
        <h3>{t('Login:loginExplanation')}</h3>
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <Field
          name="repositoryName"
          component={InputLabel}
          dataFor="repositoryName"
          inputId="repositoryName"
          inputType="text"
          label="completá nombre proyecto"
        />
      </div>
      <div>
        <Field name="isPrivate" component={Checkbox} label="Private" />
      </div>
      <div>
        <div>
          <Field name="technology" component="select">
            <option />
            {Object.values(TECHNOLOGIES).map(technology => (
              <option key={technology} value={technology}>
                {technology}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {'holaaaa'}
        </button>
      </div>
      {repoCreated && <label> vamos la reconcha de tu madreeeee </label>}
    </form>
  );
}

RepoCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  repoCreated: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'repoCreation'
})(RepoCreation);
