import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from '~components/InputLabelNew';
import SimpleSpinner from '~components/SimpleSpinner';
import AlertInfo from '~components/AlertInfo';
import Select from 'app/components/Select';
import { searchRepositories } from 'services/RepositoryService';
import { parseArrayToObjectOfSelect } from 'utils/array';

function AddOwner({ handleSubmit, error, loading, submitSucceeded, submitFailed }) {
  const limit = 100;

  const loadPageOptions = async (q, prevOptions, { page }) => {
    const {
      data: { data }
    } = await searchRepositories(page, q);

    const options = data.length ? parseArrayToObjectOfSelect(data.map(e => e.split('/')[1])) : [];

    return {
      options,
      hasMore: options.length + 1 >= limit,
      additional: {
        page: page + 1
      }
    };
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <h4 className="card-title">{t('AddOwner:title')}</h4>
      <div className="input-group">
        <i className="center-icon material-icons">people</i>
        <Field
          inputClassName="form-control"
          className="form-control"
          name="owners"
          component={InputLabelNew}
          dataFor="owners"
          inputId="owners"
          inputType="text"
          placeholder={t('AddOwner:userInput')}
        />
      </div>
      <div className="input-group">
        <i className="center-icon material-icons">list</i>
        <Field
          name="repository"
          component={props => <Select {...props} loadOptions={loadPageOptions} />}
          className="form-control select"
        />
      </div>
      <div className="footer text-center">
        <button type="submit" className="btn btn-primary btn-wd">
          {t('AddOwner:addButton')}
        </button>
        {loading && <SimpleSpinner />}
        {!loading && submitSucceeded && <AlertInfo message={t('AddOwner:successMessage')} />}
        {!loading && submitFailed && <AlertInfo icon="error_outline" type="danger" message={error} />}
      </div>
    </form>
  );
}

AddOwner.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool
};

export default reduxForm({
  form: 'AddOwner'
})(AddOwner);
