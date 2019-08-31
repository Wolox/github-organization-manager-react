import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from "~components/InputLabelNew";

import styles from './styles.module.scss';
import {FIELDS} from "./constants";

function TeamCreation({ handleSubmit, isError }) {
  return (
    <div className={`card ${styles.card}`}>
      <form className="container" onSubmit={handleSubmit}>
        <div className="card-header text-center">
          <h4 className="card-title">Create a new team</h4>
        </div>
        <div className={`card-body ${styles.cardBody}`}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons">people</i>
              </span>
            </div>
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
        <div className={`footer text-center ${styles.footer}`}>
          <button type="submit" className="btn btn-primary btn-wd btn-lg">
            Create
          </button>
        </div>
        {
          isError &&
            <div className="alert alert-danger">
              <div className="container">
                <div className="alert-icon">
                  <i className="material-icons">error_outline</i>
                </div>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true"><i className="material-icons">clear</i></span>
                </button>
                <b>Error Alert:</b> Damn man! You screwed up the server this time. You should find a good excuse for your
                Boss...
              </div>
            </div>
        }
      </form>
    </div>
  );
}

TeamCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'teamCreation'
})(TeamCreation);
