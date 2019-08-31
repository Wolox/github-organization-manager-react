import React, { Component } from 'react';

import Login from './layout';
import styles from './styles.module.scss';

class LoginContainer extends Component {
  handleLogin = () => {
    // TODO implement function
  };

  handleEmailChange = () => {
    // TODO implement function
  };

  handlePasswordChange = () => {
    // TODO implement function
  };

  render() {
    return (
      <div className={`page-header header-filter ${styles.pageHeader}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
              <Login
                onEmailChange={this.handleEmailChange}
                onPasswordChange={this.handlePasswordChange}
                onLogin={this.handleLogin}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
