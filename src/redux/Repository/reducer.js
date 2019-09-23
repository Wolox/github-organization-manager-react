import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

/* ------------- Repository reducer ------------- */
const defaultState = completeState(
  {
    data: [],
    repoCreation: undefined,
    repoCreated: false,
    addMember: undefined,
    memberAdded: false
  },
  ['repoCreated', 'memberAdded']
);

const reducerDescription = {
  primaryActions: [actions.REPO_CREATION, actions.REQUEST_REPOS, actions.ADD_MEMBER],
  override: {
    [actions.REPO_CREATED]: (state, action) => ({
      ...state,
      repoCreated: action.payload
    }),
    [actions.MEMBER_ADDED]: (state, action) => ({
      ...state,
      memberAdded: action.payload
    })
  }

  /*     case actions.REPO_CREATION: {
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
        memberAdded: true,
        loading: false
      });
    }
    case actions.ADDING_CODE_OWNER: {
      return state.merge({
        loading: true
      });
    }
    case actions.CODE_OWNER_ADDED_SUCCESS: {
      return state.merge({
        ownerAdded: true,
        loading: false
      });
    }
    case actions.ADDING_MEMBER: {
      return state.merge({
        loading: true
      });
    }
    default: {
      return state;
    }
  } */
};

export default createReducer(defaultState, completeReducer(reducerDescription));
