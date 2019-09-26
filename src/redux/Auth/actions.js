import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import { push } from 'connected-react-router';

import ROUTES from 'constants/routes';

const types = completeTypes(['AUTH_INIT'], ['LOGOUT', 'AUTH_INIT']);
export const actions = createTypes(types, '@@AUTH');

const authInit = authData => ({
  type: actions.AUTH_INIT,
  target: 'currentUser',
  payload: { data: authData }
});

const logout = () => ({
  type: actions.LOGOUT,
  target: 'currentUser',
  injections: [
    withPostSuccess(dispatch => {
      dispatch(push(push(ROUTES.LOGIN)));
    })
  ]
});

export { authInit, logout };
