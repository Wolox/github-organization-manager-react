import React from 'react';
import PropTypes from 'prop-types';

function InputLabelNew({ inputClassName, name, placeholder, inputId, inputType, handleChange, disabled }) {
  return (
    <input
      className={inputClassName}
      name={name}
      placeholder={placeholder}
      id={inputId}
      type={inputType}
      onChange={handleChange}
      disabled={disabled}
    />
  );
}

InputLabelNew.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string
};

InputLabelNew.defaultProps = {
  inputClassName: '',
  placeholder: ''
};

export default InputLabelNew;
