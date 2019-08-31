import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';

import InputLabel from '../../components/InputLabel';
import Checkbox from '../../components/Checkbox';
import SimpleSpinner from '../../components/SimpleSpinner';

import { TECHNOLOGIES } from './constants';
import styles from './styles.module.scss';

function RepoCreation({ handleSubmit, repoCreated, loading }) {
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={handleSubmit}>
      <div className="column center m-bottom-3">
        <h1>{t('RepoCreation:createNewRepository')}</h1>
        <h3>{t('RepoCreation:createNewRepositoryAdvise')}</h3>
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <Field
          name="repositoryName"
          component={InputLabel}
          dataFor="repositoryName"
          inputId="repositoryName"
          inputType="text"
          label={t('RepoCreation:projectName')}
        />
      </div>
      <div>
        <Field name="isPrivate" component={Checkbox} label={t('RepoCreation:private')} />
      </div>
      <div>
        {Object.keys(TECHNOLOGIES).map(technology => (
          <Field key={technology} name={technology} component={Checkbox} label={TECHNOLOGIES[technology]} />
        ))}
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {t('RepoCreation:create')}
        </button>
      </div>
      {loading && <SimpleSpinner className={styles.spinner} />}
      {repoCreated && <label> El/los repositorios se crearon con éxito </label>}
    </form>
  );
}

RepoCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  repoCreated: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'repoCreation'
})(RepoCreation);
