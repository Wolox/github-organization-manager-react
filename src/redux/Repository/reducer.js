import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

/* ------------- Auth reducer ------------- */
const defaultState = {
  currentUser: null,
  loading: false,
  initialLoading: true
};

/* eslint-disable complexity */
// eslint-disable-next-line new-cap
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.REPO_CREATION: {
      return state.merge({
        initialLoading: false,
        currentUser: action.payload.user
        // poner loading en true
      });
    }
    case actions.REPO_CREATION_SUCCESS: {
      return state.merge({
        loading: false,
        currentUser: action.payload.authData
        // loading en false
      });
    }
    case actions.REPO_CREATION_FAILURE: {
      return state.merge({
        loading: false,
        currentUser: null,
        err: action.payload.err
      });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */

/* ------------- Auth propTypes ------------- */
export const propTypes = {
  loading: PropTypes.bool.isRequired,
  initialLoading: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
    // TODO: Extend user model definition
  })
};
