/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckboxNew from './layout';

class CheckboxContainerNew extends Component {
  state = { isChecked: this.props.isChecked };

  handleToggle = event => {
    const { onChange } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));
    if (onChange) {
      onChange(event);
    }
  };

  render() {
    const { className, inputClassName, labelClassName, label, name, disabled, required, input } = this.props;
    const { isChecked } = this.state;

    return (
      <CheckboxNew
        className={className}
        inputClassName={inputClassName}
        labelClassName={labelClassName}
        label={label}
        name={input.name || name}
        isChecked={input.value || isChecked}
        onToggle={input.onChange || this.handleToggle}
        disabled={disabled}
        required={required}
      />
    );
  }
}

CheckboxContainerNew.defaultProps = {
  className: '',
  inputClassName: '',
  isChecked: false,
  labelClassName: ''
};

CheckboxContainerNew.propTypes = {
  input: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inputClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

export default CheckboxContainerNew;
