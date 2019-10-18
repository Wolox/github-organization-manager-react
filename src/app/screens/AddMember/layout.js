import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { t } from 'i18next';

import InputLabelNew from '~components/InputLabelNew';
import SimpleSpinner from '~components/SimpleSpinner';
import AlertInfo from '~components/AlertInfo';

function AddMember({ handleSubmit, error, loading, submitSucceeded, submitFailed }) {
  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <h4 className="card-title">{t('AddMemberToOrganization:title')}</h4>
      <div className="input-group">
        <i className="center-icon material-icons">person_add</i>
        <Field
          inputClassName="form-control"
          className="form-control"
          name="username"
          component={InputLabelNew}
          dataFor="username"
          inputId="username"
          inputType="text"
          placeholder={t('AddMemberToOrganization:userInput')}
        />
      </div>
      <div className="footer text-center">
        <button type="submit" className="btn btn-primary btn-wd">
          {t('AddMemberToOrganization:addButton')}
        </button>
        {loading && <SimpleSpinner />}
        {!loading && submitSucceeded && <AlertInfo message={t('AddMemberToOrganization:successMessage')} />}
        {!loading && submitFailed && <AlertInfo icon="error_outline" type="danger" message={error} />}
      </div>
    </form>
  );
}

AddMember.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool
};

export default reduxForm({
  form: 'addMember'
})(AddMember);
