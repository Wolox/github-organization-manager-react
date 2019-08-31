import api from '../config/api';

export const createTeam = async values => {
  console.log('valuesssss', values);
  const response = await api.post('/teams', values);
  if (response.ok) {
    return response.data;
  }
  throw response;
};
