import api from '../config/api';

export const createRepository = values => api.post('/repositories', values);

export const addMemberToOrg = values => api.post(`/organization/${values.username}`, values);

export const addOwnerToRepo = values =>
  api.post(`/repositories/${values.repository}/codeowners/`, {
    codeowners: values.owners.split(',')
  });

export const searchRepositories = (page = 1, query = '') =>
  api.get(`/search/repositories?limit=100&page=${page}&query=${query}`);
