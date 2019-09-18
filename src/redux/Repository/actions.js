import * as RepositoryService from '../../services/RepositoryService';
import { stringArrayToObject } from '../../utils/array';

export const actions = stringArrayToObject(
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
);

export const actionCreators = {
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
};
