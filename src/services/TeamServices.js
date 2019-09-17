import api from '../config/api';

export const createTeam = async values => {
  console.log('valuesssss', values);
  const response = await api.post('/teams', values);
  if (response.ok) {
    return response.data;
  }
  throw response;
};

export const addMembersToTeam = async values => {
  console.log('valuesssss', values.team);
  const response = await api.post(`/teams/${values.team}/members`, {
    usernames: values.usernames.split(',')
  });
  if (response.ok) {
    return response.data;
  }
  throw response;
};

export const getTeams = async () => {
  const response = await api.get('/teams/');
  if (response.ok) {
    return response.data;
  }
  throw response;
};
