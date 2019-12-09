import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function InputLabelNew({
  inputClassName,
  name,
  placeholder,
  inputId,
  inputType,
  handleChange,
  disabled,
  input,
  meta: { touched, error }
}) {
  return (
    <div className={styles.content}>
      <input
        className={inputClassName}
        name={name}
        placeholder={placeholder}
        id={inputId}
        type={inputType}
        onChange={handleChange}
        disabled={disabled}
        {...input}
      />
      {touched && error && <span className={`${styles.error}`}>{error}</span>}
    </div>
  );
}

InputLabelNew.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  inputClassName: PropTypes.string,
  meta: PropTypes.objectOf(PropTypes.any),
  name: PropTypes.string,
  placeholder: PropTypes.string
};

InputLabelNew.defaultProps = {
  inputClassName: '',
  placeholder: ''
};

export default InputLabelNew;
