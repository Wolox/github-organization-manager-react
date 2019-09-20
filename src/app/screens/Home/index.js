import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import ROUTES from 'constants/routes';

function Home() {
  const teamsCards = [
    {
      info: 'Add a new member to a team',
      descriptionAction: 'add member',
      path: ROUTES.ADD_MEMBER_TO_TEAM,
      icon: 'person_add'
    },
    {
      info: 'Create a new team',
      descriptionAction: 'create',
      path: ROUTES.TEAMS,
      icon: 'group_add'
    }
  ];
  const repositoriesCards = [
    {
      info: 'Add a new member to a repo',
      descriptionAction: 'add member',
      path: ROUTES.ADD_MEMBER,
      icon: 'add_circle'
    },
    {
      info: 'Add a owner to a repo',
      descriptionAction: 'add owner',
      path: ROUTES.ADD_OWNER_TO_REPO,
      icon: 'assignment_ind'
    },
    {
      info: 'Create a new repo',
      descriptionAction: 'create',
      path: ROUTES.REPO_CREATION,
      icon: 'book'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={`page-header ${styles.pageHeader}`} data-parallax="true">
        Wolox Repo Manager
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Teams</h2>
        <div className={styles.bodyCard}>
          {teamsCards.map(route => (
            <div className={styles.card} key={route.path}>
              <i className={`material-icons ${styles.iconCard}`}>{route.icon}</i>
              <div>
                <div className={styles.info}>{route.info}</div>
                <Link to={route.path} className={`btn btn-primary ${styles.btn}`}>
                  {route.descriptionAction}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>Repositories</h2>
        <div className={styles.bodyCard}>
          {repositoriesCards.map(route => (
            <div className={styles.card} key={route.path}>
              <i className={`material-icons ${styles.iconCard}`}>{route.icon}</i>
              <div>
                <div className={styles.info}>{route.info}</div>
                <Link to={route.path} className={`btn btn-primary ${styles.btn}`}>
                  {route.descriptionAction}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
