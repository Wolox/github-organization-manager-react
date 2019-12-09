import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { t } from 'i18next';

import InputLabelNew from '~components/InputLabelNew';
import SimpleSpinner from '~components/SimpleSpinner';
import AlertInfo from '~components/AlertInfo';
import SubmitButton from '~components/Buttons/Submit';

import { FIELDS } from './constants';
import { isRequired } from './validation';

function TeamCreation({ handleSubmit, loading, error, submitSucceeded, submitFailed, invalid }) {
  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <h4 className="card-title">{t('teamCreation:title')}</h4>
      <div className="input-group">
        <i className="center-icon material-icons">people</i>
        <Field
          inputClassName="form-control"
          className="form-control"
          name={FIELDS.name}
          validate={[isRequired]}
          component={InputLabelNew}
          dataFor={FIELDS.name}
          inputId={FIELDS.name}
          inputType="text"
          placeholder={t('teamCreation:teamName')}
        />
      </div>
      <div className="footer text-center">
        <SubmitButton invalid={invalid}>{t('teamCreation:createButton')}</SubmitButton>
        {loading && <SimpleSpinner />}
        {!loading && submitSucceeded && <AlertInfo message={t('teamCreation:successMessage')} />}
        {!loading && submitFailed && <AlertInfo icon="error_outline" type="danger" message={error} />}
      </div>
    </form>
  );
}

TeamCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  invalid: PropTypes.bool,
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool
};

export default reduxForm({
  form: 'teamCreation'
})(TeamCreation);
