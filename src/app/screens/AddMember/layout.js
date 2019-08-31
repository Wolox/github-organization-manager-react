import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {t} from "i18next";

import InputLabelNew from "~components/InputLabelNew";

import styles from "./styles.module.scss";

function AddMember({ handleSubmit }) {
  return (
    <div className={`card ${styles.card}`}>
      <form className="container" onSubmit={handleSubmit}>
        <div className="card-header text-center">
          <h4 className="card-title">Add user to Wolox Organization</h4>
        </div>
        <div className={`row ${styles.row}`}>
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
        <div className={`footer text-center ${styles.footer}`}>
          <button type="submit" className="btn btn-primary btn-wd btn-lg">
            Add member
          </button>
        </div>
      </form>
    </div>
  );
}

AddMember.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addMember'
})(AddMember);
