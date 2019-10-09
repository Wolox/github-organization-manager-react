import { createTypes, completeTypes, withPostFailure } from 'redux-recompose';
import { SubmissionError } from 'redux-form';

import * as RepositoryService from '~services/RepositoryService';

const types = completeTypes(['REPO_CREATION', 'ADD_MEMBER', 'ADD_CODE_OWNER', 'REQUEST_REPOS']);
export const actions = createTypes(types, '@@REPOSITORY');

const createRepository = values => ({
  type: actions.REPO_CREATION,
  target: 'repoCreation',
  service: RepositoryService.createRepository,
  payload: values,
  injections: [
    withPostFailure(() => {
      throw new SubmissionError({ _error: 'Hubo un error en la creación del repositorio' });
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
      throw new SubmissionError({ _error: 'Hubo un error al agregar el miembro al repositorio' });
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
      throw new SubmissionError({ _error: 'Hubo un error al agregar un Code Owner' });
    })
  ]
});

const getRepositories = () => ({
  type: actions.REQUEST_REPOS,
  target: 'data',
  service: RepositoryService.getRepositories
});

export default {
  createRepository,
  getRepositories,
  addMemberToOrg,
  addOwnerToRepository
};
