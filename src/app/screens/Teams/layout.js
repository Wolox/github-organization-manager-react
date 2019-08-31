import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import InputLabel from '../../components/InputLabel';

function TeamCreation({ handleSubmit }) {
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <span className="h1">Create a new team</span>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Team Name</label>
        <Field
          className="form-control"
          name="name"
          component={InputLabel}
          dataFor="name"
          inputId="name"
          inputType="text"
          label="Team name"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
}

TeamCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'teamCreation'
})(TeamCreation);
