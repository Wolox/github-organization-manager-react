import api from '../config/api';

export const createRepository = values => api.post('/repositories', values);

export const addMemberToOrg = values => api.post(`/organization/${values.username}`);

export const addOwnerToRepo = values =>
  api.post(`/repositories/${values.repository}/codeowners/`, {
    codeowners: values.owners.split(',')
  });

export const getRepositories = () => api.get('/repositories?limit=100&page=2');
