import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from '~components/InputLabelNew';
import SimpleSpinner from '~components/SimpleSpinner';

function AddMember({ handleSubmit, memberAdded, loading }) {
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="card-header text-center">
          <h4 className="card-title">Add user to Wolox Organization</h4>
        </div>
        <div className="row card-body">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">person_add</i>
              </span>
            </div>
            <Field
              inputClassName="form-control"
              className="form-control"
              name="username"
              component={InputLabelNew}
              dataFor="username"
              inputId="username"
              inputType="text"
              label="GitHub User"
              placeholder="GitHub User"
            />
          </div>
        </div>
        <div className="footer text-center">
          <button type="submit" className="btn btn-primary btn-wd btn-lg">
            Add member
          </button>
          {memberAdded && (
            <div className="alert alert-success">
              <div className="container">
                <div className="alert-icon">
                  <i className="material-icons">check</i>
                </div>
                ¡El miembro se agregó!
              </div>
            </div>
          )}
          {loading && <SimpleSpinner />}
        </div>
      </form>
    </div>
  );
}

AddMember.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  memberAdded: PropTypes.bool
};

export default reduxForm({
  form: 'addMember'
})(AddMember);
