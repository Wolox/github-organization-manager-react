import { stringArrayToObject } from '../../utils/array';
import * as TeamService from '../../services/TeamServices';

export const actions = stringArrayToObject(
  [
    'TEAM_CREATION',
    'TEAM_CREATION_SUCCESS',
    'TEAM_CREATION_FAILURE',
    'ADDING_MEMBERS',
    'MEMBER_ADDED_SUCCESS'
  ],
  '@@REPOSITORY'
);

const privateActionCreators = {
  teamCreationSuccess(teamData) {
    // response
    return {
      type: actions.TEAM_CREATION_SUCCESS,
      payload: { teamData }
    };
  },
  teamCreationFailure(err) {
    return {
      type: actions.TEAM_CREATION_FAILURE,
      payload: { err }
    };
  }
};

export const actionCreators = {
  createTeam(values) {
    return async dispatch => {
      dispatch({ type: actions.TEAM_CREATION });
      const response = await TeamService.createTeam(values);
      dispatch({ type: actions.TEAM_CREATION_SUCCESS });
    };
  },
  addMembersToTeam(values) {
    return async dispatch => {
      dispatch({ type: actions.ADDING_MEMBERS });
      const response = await TeamService.addMembersToTeam(values);
      dispatch({ type: actions.MEMBER_ADDED_SUCCESS });
    };
  },
  getTeams() {
    return TeamService.getTeams();
  }
};
