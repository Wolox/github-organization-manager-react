import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function Card({ data }) {
  return (
    <div className={styles.card}>
      <i className={`material-icons ${styles.cardIcon}`}>{data.icon}</i>
      <div>
        <div className={styles.cardInfo}>{data.info}</div>
        <Link to={data.path} className={`btn btn-primary ${styles.cardBtn}`}>
          {data.descriptionAction}
        </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
};

export default Card;
