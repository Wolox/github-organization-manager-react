import PropTypes from 'prop-types';
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
    // case actions.REPO_CREATION: {
    //   return state.merge({
    //     initialLoading: false
    //     // poner loading en true
    //   });
    // } aca va el cosito cuando está cargando
    case actions.REPO_CREATION_SUCCESS: {
      return state.merge({
        repoCreated: true
      });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */
