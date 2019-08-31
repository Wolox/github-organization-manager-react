import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import InputLabel from '../../components/InputLabel';

function AddMember({ handleSubmit }) {
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <span className="h1">Add user to Wolox Organization</span>
      </div>
      <div className="form-group">
        <Field
          className="form-control"
          name="username"
          component={InputLabel}
          dataFor="username"
          inputId="username"
          inputType="text"
          label="Github user"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add member
      </button>
    </form>
  );
}

AddMember.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addMember'
})(AddMember);
