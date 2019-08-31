import Immutable from 'seamless-immutable';

import { actions } from './actions';

/* ------------- Repository reducer ------------- */
const defaultState = {
  loading: false,
  initialLoading: true
};

/* eslint-disable complexity */
// eslint-disable-next-line new-cap
export function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.REPO_CREATION: {
      return state.merge({
        loading: true
      });
    }
    case actions.REPO_CREATION_SUCCESS: {
      return state.merge({
        repoCreated: true,
        loading: false
      });
    }
    case actions.MEMBER_ADDED: {
      return state.merge({
        memberAdded: true
      });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */
