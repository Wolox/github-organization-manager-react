import { createTypes, completeTypes, withPostFailure } from 'redux-recompose';
import { SubmissionError } from 'redux-form';
import { t } from 'i18next';

import * as RepositoryService from '~services/RepositoryService';

const types = completeTypes(['REPO_CREATION', 'ADD_MEMBER', 'ADD_CODE_OWNER']);
export const actions = createTypes(types, '@@REPOSITORY');

const createRepository = values => ({
  type: actions.REPO_CREATION,
  target: 'repoCreation',
  service: RepositoryService.createRepository,
  payload: values,
  injections: [
    withPostFailure(() => {
      throw new SubmissionError({ _error: t('RepoCreation:failedMessage') });
    })
  ]
});

const addMemberToOrg = values => ({
  type: actions.ADD_MEMBER,
  target: 'addMember',
  service: RepositoryService.addMemberToOrg,
  payload: values,
  injections: [
    withPostFailure(() => {
      throw new SubmissionError({
        _error: t('AddMemberToOrganization:failedMessage')
      });
    })
  ]
});

const addOwnerToRepository = values => ({
  type: actions.ADD_CODE_OWNER,
  target: 'addCodeOwner',
  service: RepositoryService.addOwnerToRepo,
  payload: values,
  injections: [
    withPostFailure(() => {
      throw new SubmissionError({ _error: t('AddOwner:failedMessage') });
    })
  ]
});

export default {
  createRepository,
  addMemberToOrg,
  addOwnerToRepository
};
