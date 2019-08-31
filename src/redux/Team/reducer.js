import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

/* ------------- Team reducer ------------- */
const defaultState = {
  loading: false,
  initialLoading: true
};

/* eslint-disable complexity */
// eslint-disable-next-line new-cap
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.TEAM_CREATION: {
      return state.merge({
        initialLoading: false,
        loading: true
      });
    }
    case actions.TEAM_CREATION_SUCCESS: {
      return state.merge({
        loading: false
      });
    }
    case actions.TEAM_CREATION_FAILURE: {
      return state.merge({
        loading: false,
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
  initialLoading: PropTypes.bool.isRequired
};
