import api from '~config/api';

import { setSessionToken, getSessionToken, removeSessionToken } from './LocalStorageService';

export const setCurrentUser = token => {
  api.setHeader('Authorization', `Bearer ${token}`);
  setSessionToken(token);
};
export const getCurrentUser = () => {
  const token = getSessionToken();

  if (token) {
    api.setHeader('Authorization', `Bearer ${token}`);
    return true;
  }

  return false;
};
export const removeCurrentUser = () => removeSessionToken();
