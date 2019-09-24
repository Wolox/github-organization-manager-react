import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

/* ------------- Team reducer ------------- */
const defaultState = completeState(
  {
    data: [],
    addMember: null,
    creationTeam: null,
    memberAdded: false,
    teamCreated: false
  },
  ['memberAdded', 'teamCreated']
);

const reducerDescription = {
  primaryActions: [actions.TEAM_CREATION, actions.MEMBER_ADDITION, actions.REQUEST_TEAMS],
  override: {
    [actions.TEAM_CREATED]: (state, action) => ({
      ...state,
      teamCreated: action.payload
    }),
    [actions.MEMBER_ADDED]: (state, action) => ({
      ...state,
      memberAdded: action.payload
    })
  }
};

export default createReducer(defaultState, completeReducer(reducerDescription));
