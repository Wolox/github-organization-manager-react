import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';

import InputLabel from '../../components/InputLabel';
import Checkbox from '../../components/Checkbox';

import { TECHNOLOGIES } from './constants';
import styles from './styles.module.scss';

// const {
//   DOM: { input, select }
// } = React;

function RepoCreation({ handleSubmit }) {
  const options = Object.values(TECHNOLOGIES).map(technology =>
    <option value={technology}>{technology}</option>
  );
  console.log(options);
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={handleSubmit}>
      <div className="column center m-bottom-3">
        <h2 className="m-bottom-1">{t('Login:login')}</h2>
        <h3>{t('Login:loginExplanation')}</h3>
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <Field
          name="projectName"
          component={InputLabel}
          dataFor="projectName"
          inputId="projectName"
          inputType="text"
          label="completá nombre proyecto"
        />
      </div>
      <div>
        <Field name="isPrivate" component={Checkbox} label="Private" />
        <Field name="isFork" component={Checkbox} label="Fork" />
      </div>
      <div>
        <div>
          <Field name="technology" component="select">
            <option />
            {Object.values(TECHNOLOGIES).map(technology =>
              <option value={technology}>{technology}</option>
            )}
          </Field>
        </div>
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {'holaaaa'}
        </button>
      </div>
    </form>
  );
}

RepoCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'repoCreation'
})(RepoCreation);
