import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from '../../components/InputLabelNew';
import CheckboxNew from '../../components/CheckboxNew';
import SimpleSpinner from '../../components/SimpleSpinner';

import { TECHNOLOGIES } from './constants';
import styles from './styles.module.scss';
import {FIELDS} from "../Teams/constants";

function RepoCreation({ handleSubmit, repoCreated, loading }) {
  return (
    <div className={`card ${styles.card}`}>
      <form className="container" onSubmit={handleSubmit}>
        <div className="card-header text-center">
          <h4 className="card-title">{t('RepoCreation:createNewRepository')}</h4>
        </div>
        <div className={`card-body ${styles.cardBody}`}>
          <div className="input-group">
            <div className="input-group-prepend">
              <p>{t('RepoCreation:createNewRepositoryAdvise')}</p>
            </div>
          </div>
          <div className={`row ${styles.row}`}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="material-icons">create_new_folder</i>
                </span>
              </div>
              <Field
                inputClassName="form-control"
                className="form-control"
                name="repositoryName"
                component={InputLabelNew}
                dataFor="repositoryName"
                inputId="repositoryName"
                inputType="text"
                label={t('RepoCreation:projectName')}
                placeholder={t('RepoCreation:projectName')}
              />
            </div>
          </div>
          <div className={`row ${styles.row}`}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="material-icons">lock</i>
                </span>
              </div>
              <Field name="isPrivate" component={CheckboxNew} label={t('RepoCreation:private')} />
            </div>
          </div>
          <div className={`row ${styles.row}`}>
            <h4>Tecnologías</h4>
          </div>
          <div className={`row ${styles.row}`}>
            <div className="input-group">
              {Object.keys(TECHNOLOGIES).map(technology => (
                <Field key={technology} name={technology} component={CheckboxNew} label={TECHNOLOGIES[technology]} />
              ))}
            </div>
          </div>
        </div>
        <div className={`footer text-center ${styles.footer}`}>
          {
            !loading && !repoCreated &&
            <button type="submit" className="btn btn-primary btn-wd btn-lg">
              {t('RepoCreation:create')}
            </button>
          }
          {loading && <SimpleSpinner className={styles.spinner} />}
          {
            repoCreated &&
            <div className="alert alert-success">
              <div className="container">
                <div className="alert-icon">
                  <i className="material-icons">check</i>
                </div>
                ¡El/los repositorios se crearon con éxito!
              </div>
            </div>
          }
        </div>
        {repoCreated && <label> </label>}
      </form>
    </div>
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
