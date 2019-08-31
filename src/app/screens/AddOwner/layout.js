import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';

import InputLabel from '../../components/InputLabel';

function AddOwner({ handleSubmit, ownerAdded, data }) {
  return (
    <form className="column center full-width m-top-8" onSubmit={handleSubmit}>
      <div className="column m-bottom-2">
        <Field
          name="owners"
          component={InputLabel}
          dataFor="owners"
          inputId="owners"
          inputType="text"
          label={t('AddOwner:owners')}
        />
      </div>
      <Field name="repository" component={Select} options={data} dataFor="value" inputId="value" />
      <div className="column center">
        <button type="submit" className="full-width m-bottom-1">
          {t('AddOwner:add')}
        </button>
      </div>
      {ownerAdded && <label> Los miembros se agregaron </label>}
    </form>
  );
}

AddOwner.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  ownerAdded: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'AddOwner'
})(AddOwner);
