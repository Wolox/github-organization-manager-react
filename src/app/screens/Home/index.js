import React from 'react';
import { t } from 'i18next';

import ROUTES from '~constants/routes';
import Logout from '~components/Logout';

import Card from './components/Card';
import styles from './styles.module.scss';

const teamsCards = [
  {
    info: t('teams:title'),
    descriptionAction: t('teams:addButton'),
    path: ROUTES.TEAMS,
    icon: 'view_list'
  },
  {
    info: t('AddMemberToTeam:title'),
    descriptionAction: t('AddMemberToTeam:addButton'),
    path: ROUTES.ADD_MEMBER_TO_TEAM,
    icon: 'person_add'
  },
  {
    info: t('addTeam:title'),
    descriptionAction: t('addTeam:createButton'),
    path: ROUTES.NEW_TEAM,
    icon: 'group_add'
  }
];
const repositoriesCards = [
  {
    info: t('RepoCreation:title'),
    descriptionAction: t('RepoCreation:createButton'),
    path: ROUTES.REPO_CREATION,
    icon: 'book'
  },
  {
    info: t('AddMemberToOrganization:title'),
    descriptionAction: t('AddMemberToOrganization:addButton'),
    path: ROUTES.ADD_MEMBER,
    icon: 'add_circle'
  },
  {
    info: t('AddOwner:title'),
    descriptionAction: t('AddOwner:addButton'),
    path: ROUTES.ADD_OWNER_TO_REPO,
    icon: 'assignment_ind'
  }
];

function Home() {
  return (
    <div className={styles.container}>
      <div className={`page-header ${styles.pageHeader}`} data-parallax="true">
        <span className={styles.title}>Wolox Repo Manager</span>
        <Logout className={styles.logout} />
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
