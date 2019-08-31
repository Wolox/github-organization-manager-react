import { push } from 'connected-react-router';

import * as AuthService from '../../services/AuthServices'; // cambiar
import Routes from '../../constants/routes';
import { stringArrayToObject } from '../../utils/array';

export const actions = stringArrayToObject(
  ['REPO_CREATION', 'REPO_CREATION_SUCCESS', 'REPO_CREATION_FAILURE'],
  '@@REPOSITORY'
);

const privateActionCreators = {
  repoCreationSuccess(authData) {
    // response
    return {
      type: actions.REPO_CREATION_SUCCESS,
      payload: { authData }
    };
  },
  repoCreationFailure(err) {
    return {
      type: actions.REPO_CREATION_FAILURE,
      payload: { err }
    };
  }
};

export const actionCreators = {
  createRepository(values) {
    return async dispatch => {
      // llamo al auth que llama al back
      const response = await AuthService.removeCurrentUser();
      dispatch({ type: actions.LOGOUT });
      // acciones en caso de exitoso o falla
    };
  }
};
