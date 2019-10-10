import { createReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const defaultState = completeState(
  {
    currentUser: null
  },
  ['currentUser']
);

const reducerDescription = {
  [actions.AUTH_INIT]: (state, action) => ({
    ...state,
    currentUser: action.payload.data
  }),
  [actions.LOGOUT]: (state, action) => ({
    ...state,
    currentUser: action.payload.data
  })
};

export default createReducer(defaultState, reducerDescription);
