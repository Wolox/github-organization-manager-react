import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from '~components/InputLabelNew';
import SimpleSpinner from '~components/SimpleSpinner';
import AlertInfo from '~components/AlertInfo';

import { FIELDS } from './constants';

function TeamCreation({ handleSubmit, isError, loading, teamCreated }) {
  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header text-center">
        <h4 className="card-title">Create a new team</h4>
      </div>
      <div className="card-body">
        <div className="input-group">
          <i className="center-icon material-icons">people</i>
          <Field
            inputClassName="form-control"
            className="form-control"
            name={FIELDS.name}
            component={InputLabelNew}
            dataFor={FIELDS.name}
            inputId={FIELDS.name}
            inputType="text"
            label="Team name"
            placeholder="Team Name"
          />
        </div>
      </div>
      <div className="footer text-center">
        <button type="submit" className="btn btn-primary btn-wd btn-lg">
          Create
        </button>

        {isError && (
          <div className="alert alert-danger">
            <div className="container">
              <i className="center-icon material-icons">error_outline</i>
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <i className="center-icon material-icons">clear</i>
              </button>
              <b>Error Alert:</b> Damn man! You screwed up the server this time. You should find a good excuse
              for your Boss...
            </div>
          </div>
        )}
        {loading && <SimpleSpinner />}
        {teamCreated && !loading && <AlertInfo message="¡El equipo se creó con éxito!" />}
      </div>
    </form>
  );
}

TeamCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  teamCreated: PropTypes.bool.isRequired,
  isError: PropTypes.bool
};

export default reduxForm({
  form: 'teamCreation'
})(TeamCreation);
