import { createTypes, completeTypes, withPostFailure } from 'redux-recompose';
import { SubmissionError } from 'redux-form';
import { t } from 'i18next';

import * as TeamService from '~services/TeamServices';

const types = completeTypes(['TEAM_CREATION', 'MEMBER_ADDITION', 'REQUEST_TEAMS']);
export const actions = createTypes(types, '@@TEAM');

const addMembersToTeam = values => ({
  type: actions.MEMBER_ADDITION,
  target: 'addMember',
  service: TeamService.addMembersToTeam,
  payload: values,
  injections: [
    withPostFailure(() => {
      throw new SubmissionError({ _error: t('AddMemberToTeam:failedMessage') });
    })
  ]
});

const createTeam = values => ({
  type: actions.TEAM_CREATION,
  target: 'creationTeam',
  service: TeamService.createTeam,
  payload: values,
  injections: [
    withPostFailure(() => {
      throw new SubmissionError({ _error: t('teamCreation:failedMessage') });
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
  createTeam
};
