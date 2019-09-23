import { createTypes, completeTypes, withPostSuccess, withPostFailure } from 'redux-recompose';
import { SubmissionError } from 'redux-form';

import * as RepositoryService from '../../services/RepositoryService';

/* export const actions = stringArrayToObject(
  [
    'REPO_CREATION',
    'REPO_CREATION_SUCCESS',
    'MEMBER_ADDED',
    'REPO_CREATION_FAILURE, OWNER_ADDED',
    'ADDING_CODE_OWNER',
    'CODE_OWNER_ADDED_SUCCESS',
    'ADDING_MEMBER'
  ],
  '@@REPOSITORY'
); */

const types = completeTypes(
  [
    'REPO_CREATION',
    'ADD_MEMBER',
    'REPO_CREATION_FAILURE, OWNER_ADDED',
    'ADDING_CODE_OWNER',
    'CODE_OWNER_ADDED_SUCCESS',
    'REQUEST_REPOS'
  ],
  ['REPO_CREATED', 'MEMBER_ADDED']
);
export const actions = createTypes(types, '@@REPOSITORY');
/*
const actionCreators = {
  createRepository(values) {
    return async dispatch => {
      // hacer try catch
      dispatch({ type: actions.REPO_CREATION });
      await RepositoryService.createRepository(values);
      // acciones en caso de exitoso o falla
      dispatch({ type: actions.REPO_CREATION_SUCCESS });
    };
  },
  addMemberToOrg(values) {
    return async dispatch => {
      // hacer try catch
      dispatch({ type: actions.ADDING_MEMBER });
      await RepositoryService.addMemberToOrg(values);
      dispatch({ type: actions.MEMBER_ADDED });
    };
  },
  addOwnerToRepository(values) {
    return async dispatch => {
      dispatch({ type: actions.ADDING_CODE_OWNER });
      await RepositoryService.addOwnerToRepo(values);
      dispatch({ type: actions.CODE_OWNER_ADDED_SUCCESS });
    };
  },
  getRepositories() {
    return RepositoryService.getRepositories();
  }
}; */

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
      throw new SubmissionError({ _error: 'Error...' });
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
      throw new SubmissionError({ _error: 'Error...' });
    })
  ]
});

const getRepositories = () => ({
  type: actions.REQUEST_REPOS,
  target: 'data',
  service: RepositoryService.getRepositories
});

export default { createRepository, getRepositories, repoCreated, addMemberToOrg, memberAdded };
