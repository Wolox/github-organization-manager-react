import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

/* ------------- Team reducer ------------- */
const defaultState = completeState({
  data: [],
  addMember: null,
  creationTeam: null
});

const reducerDescription = {
  primaryActions: [actions.TEAM_CREATION, actions.MEMBER_ADDITION, actions.REQUEST_TEAMS]
};

export default createReducer(defaultState, completeReducer(reducerDescription));
