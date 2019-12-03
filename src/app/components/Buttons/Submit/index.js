import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function SubmitButton({ invalid, children }) {
  return (
    <button
      disabled={invalid}
      type="submit"
      className={`btn btn-wd ${cx({ 'btn-primary': !invalid, 'btn-disabled': invalid })}`}
    >
      {children}
    </button>
  );
}

SubmitButton.propTypes = {
  invalid: PropTypes.bool
};

export default SubmitButton;
