import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';

import InputLabelNew from '../../components/InputLabelNew';

import styles from './styles.module.scss';

function AddTeamToMember({ handleSubmit, memberAdded, data, handleOnChange }) {
  return (
    <div className={`card ${styles.card}`}>
      <form className="container" onSubmit={handleSubmit}>
        <div className="card-header text-center">
          <h4 className="card-title">Add a member to team</h4>
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
              name="usernames"
              component={InputLabelNew}
              dataFor="usernames"
              inputId="usernames"
              inputType="text"
              label={t('AddTeamToMember:teams')}
              placeholder="Usuarios de github"
            />
          </div>
          <div className={styles.select}>
          <Field name="team" component="select" onChange={handleOnChange} inputClassName="form-control">
          {data.map(opt => <option value={opt.value.id}>{opt.label}</option>)}
          </Field>
          </div>
        </div>
        <div className={`footer text-center ${styles.footer}`}>
          {
            !memberAdded &&
            <button type="submit" className="btn btn-primary btn-wd btn-lg">
              {t('AddTeamToMember:add')}
            </button>
          }
          {
            memberAdded &&
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

AddTeamToMember.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  memberAdded: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'AddTeamToMember'
})(AddTeamToMember);
