import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';

import InputLabelNew from '~components/InputLabelNew';
import SimpleSpinner from '~components/SimpleSpinner';
import AlertInfo from '~components/AlertInfo';
import { customStylesSelect } from 'app/components/Select/constants';

function AddMemberToTeam({
  handleSubmit,
  onSubmit,
  reset,
  data,
  error,
  loading,
  submitSucceeded,
  submitFailed
}) {
  const [team, setTeam] = useState(null);

  const options = data.map(elem => ({ label: elem.label, value: elem.value.id }));

  const handleChange = value => setTeam(value);

  const handleReset = () => {
    reset();
    setTeam(null);
  };

  return (
    <form
      className="card card-body"
      onSubmit={handleSubmit(values => {
        if (values.team) {
          onSubmit({ ...values, team: values.team.value });
          handleReset();
        }
      })}
    >
      <h4 className="card-title">{t('AddMemberToTeam:title')}</h4>
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
          placeholder={t('AddMemberToTeam:userInput')}
        />
      </div>
      <div className="input-group">
        <i className="center-icon material-icons">list</i>
        <Field
          name="team"
          dataFor="team"
          onChange={handleChange}
          inputId="team"
          className="form-control selectpicker"
          component={({ input, ...props }) => (
            <Select {...input} {...props} value={team} styles={customStylesSelect} options={options} />
          )}
        />
      </div>
      <div className="footer text-center">
        <button type="submit" className="btn btn-primary btn-wd">
          {t('AddMemberToTeam:addButton')}
        </button>
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
  reset: PropTypes.func,
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool,
  onSubmit: PropTypes.func
};

export default reduxForm({
  form: 'AddMemberToTeam'
})(AddMemberToTeam);
