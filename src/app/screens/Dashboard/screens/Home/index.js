import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import ROUTES from 'constants/routes';

function Home() {
  const teams = [
    { description: 'add member', path: ROUTES.ADD_MEMBER_TO_TEAM },
    { description: 'create', path: ROUTES.TEAMS }
  ];
  const repositories = [
    { description: 'add member', path: ROUTES.ADD_MEMBER },
    { description: 'add owner', path: ROUTES.ADD_OWNER_TO_REPO },
    { description: 'create', path: ROUTES.REPO_CREATION }
  ];
  return (
    <div className={styles.app}>
      <div className={`page-header ${styles.pageHeader}`} data-parallax="true">
        Wolox Repo Manager
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Team</h2>
        <div className={styles.container}>
          {teams.map(route => (
            <div className={styles.card} key={route.path}>
              <div className={styles.picture} />
              <Link to={route.path} className="btn btn-primary">
                {route.description}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Repositories</h2>
        <div className={styles.container}>
          {repositories.map(route => (
            <div className={styles.card} key={route.path}>
              <div className={styles.picture} />
              <Link to={route.path} className="btn btn-primary">
                {route.description}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
