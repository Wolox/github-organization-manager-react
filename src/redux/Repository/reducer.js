import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

/* ------------- Repository reducer ------------- */
const defaultState = completeState(
  {
    data: [],
    repoCreation: null,
    repoCreated: false,
    addMember: null,
    memberAdded: false,
    addCodeOwner: null,
    codeOwnerAdded: false
  },
  ['repoCreated', 'memberAdded', 'codeOwnerAdded']
);

const reducerDescription = {
  primaryActions: [actions.REPO_CREATION, actions.REQUEST_REPOS, actions.ADD_MEMBER, actions.ADD_CODE_OWNER],
  override: {
    [actions.REPO_CREATED]: (state, action) => ({
      ...state,
      repoCreated: action.payload
    }),
    [actions.MEMBER_ADDED]: (state, action) => ({
      ...state,
      memberAdded: action.payload
    }),
    [actions.CODE_OWNER_ADDED]: (state, action) => ({
      ...state,
      ownerAdded: action.payload
    })
  }
};

export default createReducer(defaultState, completeReducer(reducerDescription));
