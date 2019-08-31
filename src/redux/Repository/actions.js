import * as RepositoryService from '../../services/RepositoryService';
import { stringArrayToObject } from '../../utils/array';

export const actions = stringArrayToObject(
  ['REPO_CREATION', 'REPO_CREATION_SUCCESS', 'MEMBER_ADDED', 'REPO_CREATION_FAILURE'],
  '@@REPOSITORY'
);

// const privateActionCreators = {
//   repoCreationFailure(err) {
//     return {
//       type: actions.REPO_CREATION_FAILURE,
//       payload: { err }
//     };
//   }
// };

export const actionCreators = {
  createRepository(values) {
    return async dispatch => {
      // hacer try catch
      const response = await RepositoryService.createRepository(values);
      dispatch({ type: actions.REPO_CREATION_SUCCESS });
      // acciones en caso de exitoso o falla
      console.log('ressssssssssssssss', response);
    };
  },
  addMemberToOrg(values) {
    return async dispatch => {
      // hacer try catch
      const response = await RepositoryService.addMemberToOrg(values);
      dispatch({ type: actions.MEMBER_ADDED });
      console.log('addMemberToOrg res', response);
    };
  }
};
