import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';

import InputLabelNew from "~components/InputLabelNew";

import styles from "./styles.module.scss";

function AddOwner({ handleSubmit, ownerAdded, data }) {
  return (
    <div className={`card ${styles.card}`}>
      <form className="container" onSubmit={handleSubmit}>
        <div className="card-header text-center">
          <h4 className="card-title">Add owner</h4>
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
              name="owners"
              component={InputLabelNew}
              dataFor="owners"
              inputId="owners"
              inputType="text"
              label={t('AddOwner:owners')}
              placeholder="Usuarios de github"
            />
          </div>
          <div className={styles.select}>
        <Field name="repository" component="select" inputClassName="form-control">
          {data.map(opt => <option value={opt.label}>{opt.label}</option>)}
      </Field>
          </div>
        </div>
        <div className={`footer text-center ${styles.footer}`}>
          {
            !ownerAdded &&
            <button type="submit" className="btn btn-primary btn-wd btn-lg">
              {t('AddOwner:add')}
            </button>
          }
          {
            ownerAdded &&
            <div className="alert alert-success">
              <div className="container">
                <div className="alert-icon">
                  <i className="material-icons">check</i>
                </div>
                ¡Los miembros se agregaron!
              </div>
            </div>
          }
        </div>
      </form>
    </div>
  );
}

AddOwner.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  ownerAdded: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'AddOwner'
})(AddOwner);
