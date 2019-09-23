import React from 'react';

import Card from './components/Card';
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
        <h2 className={styles.sectionTitle}>Teams</h2>
        <div className={styles.sectionBody}>
          {teamsCards.map(card => (
            <Card key={card.path} data={card} />
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Repositories</h2>
        <div className={styles.sectionBody}>
          {repositoriesCards.map(card => (
            <Card key={card.path} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
