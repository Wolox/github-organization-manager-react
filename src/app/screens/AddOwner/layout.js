import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from '~components/InputLabelNew';
import SimpleSpinner from '~components/SimpleSpinner';
import AlertInfo from '~components/AlertInfo';

function AddOwner({ handleSubmit, ownerAdded, data, loading }) {
  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header text-center">
        <h4 className="card-title">Add owner</h4>
      </div>
      <div className="card-body">
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
            label={t('AddOwner:owners')}
            placeholder="Usuarios de github"
          />
        </div>
        <div className="input-group">
          <i className="center-icon material-icons">list</i>
          <Field name="repository" component="select" className="form-control selectpicker">
            <option value="" />
            {data.map(opt => (
              <option key={opt.label} value={opt.label}>
                {opt.label}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div className="footer text-center">
        <button type="submit" className="btn btn-primary btn-wd btn-lg">
          {t('AddOwner:add')}
        </button>
        {ownerAdded && !loading && <AlertInfo message="¡Los code owner se agregaron!" />}
        {loading && <SimpleSpinner />}
      </div>
    </form>
  );
}

AddOwner.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  ownerAdded: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool
};

export default reduxForm({
  form: 'AddOwner'
})(AddOwner);
