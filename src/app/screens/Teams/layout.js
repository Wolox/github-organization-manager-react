import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import InputLabelNew from "~components/InputLabelNew";

import styles from './styles.module.scss';
import {FIELDS} from "./constants";

function TeamCreation({ handleSubmit }) {
  return (
    <>
      <div className={`page-header ${styles.pageHeader}`} data-parallax="true" />
      <div className="main main-raised">
        <div className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

TeamCreation.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'teamCreation'
})(TeamCreation);
