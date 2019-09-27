/* eslint-disable react/jsx-max-depth, react/forbid-prop-types  */
import React from 'react';
import { Link } from 'react-router-dom';

import routes from '~constants/routes';
import { useAuth0 } from 'react-auth0-spa';

import styles from './styles.module.scss';

function Menu() {
  const { logout } = useAuth0();

  return (
    <nav
      className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div className="container">
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
                <i className="material-icons">people</i> teams
              </Link>
              <div className="dropdown-menu dropdown-with-icons">
                <Link to={routes.TEAMS} className="dropdown-item">
                  <i className="material-icons">people_outline</i> Create teams
                </Link>
                <Link to={routes.ADD_MEMBER_TO_TEAM} className="dropdown-item">
                  <i className="material-icons">person_add</i> Add member to team
                </Link>
              </div>
            </li>
            <li className="dropdown nav-item">
              <Link to="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="material-icons">folder</i> repositories
              </Link>
              <div className="dropdown-menu dropdown-with-icons">
                <Link to={routes.REPO_CREATION} className="dropdown-item">
                  <i className="material-icons">create_new_folder</i> Create repo
                </Link>
                <Link to={routes.ADD_MEMBER} className="dropdown-item">
                  <i className="material-icons">person_add</i> Add member
                </Link>
                <Link to={routes.ADD_OWNER_TO_REPO} className="dropdown-item">
                  <i className="material-icons">assignment_turned_in</i> Add owner
                </Link>
              </div>
            </li>
          </ul>
          <span
            className={`${styles.logout} nav-link`}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            <i className={`material-icons ${styles.icon}`}>power_settings_new</i>Logout
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
