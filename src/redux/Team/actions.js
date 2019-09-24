import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { SubmissionError } from 'redux-form';

import * as TeamService from '../../services/TeamServices';

const types = completeTypes(
  ['TEAM_CREATION', 'MEMBER_ADDITION', 'REQUEST_TEAMS'],
  ['TEAM_CREATED', 'MEMBER_ADDED']
);
export const actions = createTypes(types, '@@TEAM');

const memberAdded = value => ({
  type: actions.MEMBER_ADDED,
  target: 'memberAdded',
  payload: value
});

const teamCreated = value => ({
  type: actions.TEAM_CREATED,
  target: 'teamCreated',
  payload: value
});

const addMembersToTeam = values => ({
  type: actions.MEMBER_ADDITION,
  target: 'addMember',
  service: TeamService.addMembersToTeam,
  payload: values,
  injections: [
    withPostSuccess(dispatch => {
      dispatch(memberAdded(true));
    }),
    withPostFailure(dispatch => {
      dispatch(memberAdded(false));
      throw new SubmissionError({ _error: 'Error...' });
    })
  ]
});

const createTeam = values => ({
  type: actions.TEAM_CREATION,
  target: 'creationTeam',
  service: TeamService.createTeam,
  payload: values,
  injections: [
    withPostSuccess(dispatch => {
      dispatch(teamCreated(true));
    }),
    withPostFailure(dispatch => {
      dispatch(teamCreated(false));
      throw new SubmissionError({ _error: 'Error...' });
    })
  ]
});

const getTeams = () => ({
  type: actions.REQUEST_TEAMS,
  target: 'data',
  service: TeamService.getTeams,
  successSelector: response => response.data.teams
});

export default {
  getTeams,
  addMembersToTeam,
  createTeam,
  memberAdded,
  teamCreated
};
