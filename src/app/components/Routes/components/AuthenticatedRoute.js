import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import ROUTES from '~constants/routes';

function AuthenticatedRoute({ isAuthenticated, component: Comp, ...props }) {
  if (!isAuthenticated) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <Route
      {...props}
      // eslint-disable-next-line react/jsx-no-bind
      render={routeProps => <Comp {...routeProps} />}
    />
  );
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.elementType,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.currentUser
});

export default withRouter(connect(mapStateToProps)(AuthenticatedRoute));
