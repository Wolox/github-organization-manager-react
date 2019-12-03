import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

/* ------------- Repository reducer ------------- */
const defaultState = completeState({
  data: null,
  repoCreation: null,
  addMember: null,
  addCodeOwner: null
});

const reducerDescription = {
  primaryActions: [actions.REPO_CREATION, actions.ADD_MEMBER, actions.ADD_CODE_OWNER]
};

export default createReducer(defaultState, completeReducer(reducerDescription));
