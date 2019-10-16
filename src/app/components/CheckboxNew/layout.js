import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function CheckboxNew({ labelClassName, label, name, isChecked, onToggle, disabled, required, input }) {
  return (
    <div className={`form-check ${styles.check}`}>
      <label className={labelClassName} htmlFor={label}>
        <input
          className="form-check-input"
          type="checkbox"
          id={label} // eslint-disable-line react/forbid-dom-props
          name={name}
          value={label}
          checked={isChecked}
          onChange={onToggle}
          disabled={disabled}
          required={required}
          {...input}
        />
        {label}
        <span className="form-check-sign">
          <span className="check" />
        </span>
      </label>
    </div>
  );
}

CheckboxNew.defaultProps = {
  className: '',
  inputClassName: '',
  labelClassName: ''
};

CheckboxNew.propTypes = {
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.objectOf(PropTypes.any),
  inputClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool
};

export default CheckboxNew;
