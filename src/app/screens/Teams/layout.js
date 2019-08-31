import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import InputLabel from '../../components/InputLabel';

import styles from './styles.module.scss';

function TeamCreation({ handleSubmit }) {
  return (
    <>
      <div className={`page-header header-filter ${styles.pageHeader}`} data-parallax="true" />
      <div className="main main-raised">
        <div className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="profile">
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
