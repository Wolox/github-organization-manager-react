import React from 'react';
import { string } from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.scss';

function SimpleSpinner({ className, containerClassName }) {
  return (
    <div className={cn('item-1 row middle center', containerClassName)}>
      <div className={cn(styles.spinner, className)} />
    </div>
  );
}

SimpleSpinner.propTypes = {
  className: string,
  containerClassName: string
};

export default SimpleSpinner;
