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

export const actionCreators = {
  createTeam(values) {
    return async dispatch => {
      dispatch({ type: actions.TEAM_CREATION });
      await TeamService.createTeam(values);
      dispatch({ type: actions.TEAM_CREATION_SUCCESS });
    };
  },
  addMembersToTeam(values) {
    return async dispatch => {
      dispatch({ type: actions.ADDING_MEMBERS });
      await TeamService.addMembersToTeam(values);
      dispatch({ type: actions.MEMBER_ADDED_SUCCESS });
    };
  },
  getTeams() {
    return TeamService.getTeams();
  }
};
