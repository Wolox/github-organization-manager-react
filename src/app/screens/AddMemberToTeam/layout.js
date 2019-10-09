import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from '~components/InputLabelNew';
import SimpleSpinner from '~components/SimpleSpinner';
import AlertInfo from '~components/AlertInfo';

function AddTeamToMember({ handleSubmit, data, error, loading, submitSucceeded, submitFailed }) {
  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header text-center">
        <h4 className="card-title">Add a member to team</h4>
      </div>
      <div className="card-body">
        <div className="input-group">
          <i className="center-icon material-icons">people</i>
          <Field
            inputClassName="form-control"
            className="form-control"
            name="usernames"
            component={InputLabelNew}
            dataFor="usernames"
            inputId="usernames"
            inputType="text"
            label={t('AddTeamToMember:teams')}
            placeholder="Usuarios de github"
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
      </div>
      <div className="footer text-center">
        <button type="submit" className="btn btn-primary btn-wd btn-lg">
          {t('AddTeamToMember:add')}
        </button>
        {loading && <SimpleSpinner />}
        {!loading && submitSucceeded && <AlertInfo message="¡Los miembros se agregaron!" />}
        {!loading && submitFailed && <AlertInfo icon="error_outline" type="danger" message={error} />}
      </div>
    </form>
  );
}

AddTeamToMember.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
  error: PropTypes.string,
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool
};

export default reduxForm({
  form: 'AddTeamToMember'
})(AddTeamToMember);
