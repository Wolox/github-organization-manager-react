import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';

import styles from './styles.module.scss';

function Card({ data }) {
  return (
    <div className={styles.card}>
      <i className={`material-icons ${styles.cardIcon}`}>{data.icon}</i>
      <span className={styles.cardInfo}>{data.info}</span>
      <Link to={data.path} className={`btn btn-primary ${styles.cardBtn}`}>
        {data.descriptionAction}
      </Link>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
};

export default Card;
