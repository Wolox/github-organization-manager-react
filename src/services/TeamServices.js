import api from '../config/api';

export const createTeam = values => api.post('/teams', values);

export const addMembersToTeam = values =>
  api.post(`/teams/${values.team}/members`, {
    usernames: values.usernames.split(',')
  });

export const getTeams = () => api.get('/teams');
