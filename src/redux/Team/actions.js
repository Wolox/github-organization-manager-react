import { stringArrayToObject } from '../../utils/array';
import * as TeamService from '../../services/TeamServices';

export const actions = stringArrayToObject(
  ['TEAM_CREATION', 'TEAM_CREATION_SUCCESS', 'TEAM_CREATION_FAILURE'],
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
      const response = await TeamService.createTeam(values);
      // acciones en caso de exitoso o falla
    };
  },
  addMembersToTeam(values) {
    return async dispatch => {
      const response = await TeamService.addMembersToTeam(values);
      // acciones en caso de exitoso o falla
    };
  },
  getTeams() {
    return TeamService.getTeams();
  }
};
