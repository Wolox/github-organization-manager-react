import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from '~components/InputLabelNew';
import CheckboxNew from '~components/CheckboxNew';
import SimpleSpinner from '~components/SimpleSpinner';
import AlertInfo from '~components/AlertInfo';

import { TECHNOLOGIES } from './constants';
import styles from './styles.module.scss';

function RepoCreation({ handleSubmit, loading, error, submitSucceeded, submitFailed }) {
  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <h4 className="card-title">{t('RepoCreation:title')}</h4>
      <p className={`description ${styles.description}`}>{t('RepoCreation:advise')}</p>
      <div className={`${styles.row} input-group`}>
        <i className="center-icon material-icons">create_new_folder</i>
        <Field
          inputClassName="form-control"
          className="form-control"
          name="repositoryName"
          component={InputLabelNew}
          dataFor="repositoryName"
          inputId="repositoryName"
          inputType="text"
          placeholder={t('RepoCreation:projectName')}
        />
      </div>
      <div className={`${styles.row} input-group`}>
        <i className="center-icon material-icons">lock</i>
        <Field name="isPrivate" component={CheckboxNew} label={t('RepoCreation:private')} />
      </div>
      <h4 className="card-title">{t('RepoCreation:techTitle')}</h4>
      <div className={`${styles.row} input-group`}>
        {Object.keys(TECHNOLOGIES).map(technology => (
          <Field
            key={technology}
            name={technology}
            component={CheckboxNew}
            label={TECHNOLOGIES[technology]}
          />
        ))}
      </div>
      <div className="footer text-center">
        <button type="submit" className="btn btn-primary btn-wd">
          {t('RepoCreation:createButton')}
        </button>
        {loading && <SimpleSpinner />}
        {!loading && submitSucceeded && <AlertInfo message={t('RepoCreation:successMessage')} />}
        {!loading && submitFailed && <AlertInfo icon="error_outline" type="danger" message={error} />}
      </div>
    </form>
  );
}

RepoCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool
};

export default reduxForm({
  form: 'repoCreation'
})(RepoCreation);
