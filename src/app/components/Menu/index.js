import React from 'react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

import routes from '~constants/routes';
import Logout from '~components/Logout';

function Menu() {
  return (
    <nav
      className="navbar navbar-transparent navbar-expand-lg navbar-menu"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div className="navbar-translate">
        <Link className="navbar-brand" to={routes.HOME}>
          Wolox Repo Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="dropdown nav-item">
            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="material-icons">people</i> {t('optionMenu:team')}
            </Link>
            <div className="dropdown-menu dropdown-with-icons">
              <Link to={routes.TEAMS} className="dropdown-item">
                <i className="material-icons">group_add</i>
                {t('addTeam:labelMenu')}
              </Link>
              <Link to={routes.ADD_MEMBER_TO_TEAM} className="dropdown-item">
                <i className="material-icons">person_add</i>
                {t('AddMemberToTeam:labelMenu')}
              </Link>
            </div>
          </li>
          <li className="dropdown nav-item">
            <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="material-icons">folder</i> {t('optionMenu:repo')}
            </Link>
            <div className="dropdown-menu dropdown-with-icons">
              <Link to={routes.REPO_CREATION} className="dropdown-item">
                <i className="material-icons">book</i>
                {t('RepoCreation:labelMenu')}
              </Link>
              <Link to={routes.ADD_MEMBER} className="dropdown-item">
                <i className="material-icons">add_circle</i>
                {t('AddMemberToOrganization:labelMenu')}
              </Link>
              <Link to={routes.ADD_OWNER_TO_REPO} className="dropdown-item">
                <i className="material-icons">assignment_ind</i>
                {t('AddOwner:labelMenu')}
              </Link>
            </div>
          </li>
        </ul>
        <Logout />
      </div>
    </nav>
  );
}

export default Menu;
