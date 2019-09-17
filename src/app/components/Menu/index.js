/* eslint-disable react/forbid-prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

// import styles from './styles.module.scss';

function Menu() {
  return (
    <nav
      className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand" href="/">
            Wolox Repo Manager
          </a>
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
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="material-icons">people</i> teams
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="/teams" className="dropdown-item">
                  <i className="material-icons">people_outline</i> Create teams
                </a>
                <a href="/teams/add_member" className="dropdown-item">
                  <i className="material-icons">person_add</i> Add member to team
                </a>
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                <i className="material-icons">folder</i> repositories
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="/repositories" className="dropdown-item">
                  <i className="material-icons">create_new_folder</i> Create repo
                </a>
                <a href="/add_member" className="dropdown-item">
                  <i className="material-icons">person_add</i> Add member
                </a>
                <a href="/add_owner" className="dropdown-item">
                  <i className="material-icons">assignment_turned_in</i> Add owner
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// CheckboxNew.defaultProps = {
//   className: '',
//   inputClassName: '',
//   labelClassName: ''
// };

// CheckboxNew.propTypes = {
//   input: PropTypes.object.isRequired,
//   onToggle: PropTypes.func.isRequired,
//   className: PropTypes.string,
//   disabled: PropTypes.bool,
//   inputClassName: PropTypes.string,
//   isChecked: PropTypes.bool,
//   label: PropTypes.string,
//   labelClassName: PropTypes.string,
//   name: PropTypes.string,
//   required: PropTypes.bool
// };

export default Menu;
