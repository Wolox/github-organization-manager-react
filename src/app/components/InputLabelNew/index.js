import React from 'react';
import PropTypes from 'prop-types';

function InputLabelNew({
  inputClassName,
  name,
  placeholder,
  inputId,
  inputType,
  handleChange,
  disabled,
  input
}) {
  return (
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
  );
}

InputLabelNew.propTypes = {
  input: PropTypes.objectOf(PropTypes.object).isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string
};

InputLabelNew.defaultProps = {
  inputClassName: '',
  placeholder: ''
};

export default InputLabelNew;
