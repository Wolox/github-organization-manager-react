import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { SubmissionError } from 'redux-form';

import * as RepositoryService from '~services/RepositoryService';

const types = completeTypes(
  ['REPO_CREATION', 'ADD_MEMBER', 'ADD_CODE_OWNER', 'REQUEST_REPOS'],
  ['REPO_CREATED', 'MEMBER_ADDED', 'CODE_OWNER_ADDED']
);
export const actions = createTypes(types, '@@REPOSITORY');

const repoCreated = value => ({
  type: actions.REPO_CREATED,
  target: 'repoCreated',
  payload: value
});

const memberAdded = value => ({
  type: actions.MEMBER_ADDED,
  target: 'memberAdded',
  payload: value
});

const codeOwnerAdded = value => ({
  type: actions.CODE_OWNER_ADDED,
  target: 'codeOwnerAdded',
  payload: value
});

const createRepository = values => ({
  type: actions.REPO_CREATION,
  target: 'repoCreation',
  service: RepositoryService.createRepository,
  payload: values,
  injections: [
    withPostSuccess(dispatch => {
      dispatch(repoCreated(true));
    }),
    withPostFailure(dispatch => {
      dispatch(repoCreated(false));
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
    withPostSuccess(dispatch => {
      dispatch(memberAdded(true));
    }),
    withPostFailure(dispatch => {
      dispatch(memberAdded(false));
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
    withPostSuccess(dispatch => {
      dispatch(codeOwnerAdded(true));
    }),
    withPostFailure(dispatch => {
      dispatch(codeOwnerAdded(false));
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
  repoCreated,
  addMemberToOrg,
  memberAdded,
  addOwnerToRepository,
  codeOwnerAdded
};
