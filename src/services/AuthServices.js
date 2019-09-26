import api from '../config/api';
/* import { actionCreators as authActions } from '../redux/Auth/actions'; */

import * as LocalStorageService from './LocalStorageService';

export const setCurrentUser = token => {
  api.setHeader('Authorization', `Bearer ${token}`);
  LocalStorageService.setSessionToken(token);
};
export const getCurrentUser = () => {
  const token = LocalStorageService.getSessionToken();

  if (token) {
    api.setHeader('Authorization', `Bearer ${token}`);
    return true;
  }

  return false;
};
export const removeCurrentUser = () => LocalStorageService.removeSessionToken();
