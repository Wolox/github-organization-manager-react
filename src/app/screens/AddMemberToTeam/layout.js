import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from '~components/InputLabelNew';
import SimpleSpinner from '~components/SimpleSpinner';
import AlertInfo from '~components/AlertInfo';
import SubmitButton from '~components/Buttons/Submit';

import { isRequired } from './validation';

function AddMemberToTeam({ handleSubmit, data, error, loading, submitSucceeded, submitFailed, invalid }) {
  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <h4 className="card-title">{t('AddMemberToTeam:title')}</h4>
      <div className="input-group">
        <i className="center-icon material-icons">people</i>
        <Field
          inputClassName="form-control"
          className="form-control"
          name="usernames"
          validate={[isRequired]}
          component={InputLabelNew}
          dataFor="usernames"
          inputId="usernames"
          inputType="text"
          placeholder={t('AddMemberToTeam:usernames')}
        />
      </div>
      <div className="input-group">
        <i className="center-icon material-icons">list</i>
        <Field name="team" component="select" className="form-control selectpicker">
          <option value="" />
          {data.map(opt => (
            <option key={opt.value.id} value={opt.value.id}>
              {opt.label}
            </option>
          ))}
        </Field>
      </div>
      <div className="footer text-center">
        <SubmitButton invalid={invalid}>{t('AddMemberToTeam:addButton')}</SubmitButton>
        {loading && <SimpleSpinner />}
        {!loading && submitSucceeded && <AlertInfo message={t('AddMemberToTeam:successMessage')} />}
        {!loading && submitFailed && <AlertInfo icon="error_outline" type="danger" message={error} />}
      </div>
    </form>
  );
}

AddMemberToTeam.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
  error: PropTypes.string,
  invalid: PropTypes.bool,
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool
};

export default reduxForm({
  form: 'AddMemberToTeam'
})(AddMemberToTeam);
