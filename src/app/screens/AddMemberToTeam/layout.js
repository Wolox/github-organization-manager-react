import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';

import InputLabel from '../../components/InputLabel';
import Checkbox from '../../components/Checkbox';

import { TECHNOLOGIES } from './constants';
import styles from './styles.module.scss';

function AddTeamToMember({ handleSubmit, memberAdded, data }) {
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={handleSubmit}>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        <Field
          name="usernames"
          component={InputLabel}
          dataFor="usernames"
          inputId="usernames"
          inputType="text"
          label={t('AddTeamToMember:teams')}
        />
      </div>
      <Field name="team" component={Select} options={data} dataFor="value" inputId="value" />
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {t('AddTeamToMember:add')}
        </button>
      </div>
      {memberAdded && <label> Los miembros se agregaron </label>}
    </form>
  );
}

AddTeamToMember.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  memberAdded: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'AddTeamToMember'
})(AddTeamToMember);
