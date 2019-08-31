import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from '../src/app/components/Spinner/components/loading';

import styles from './styles.module.scss';

const colorSpinner = 'steelblue';

storiesOf('Spinner', module).add('Default', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="three-bounce" color={colorSpinner} />
  </div>
));