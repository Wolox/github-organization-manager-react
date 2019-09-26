import { create } from 'apisauce';

import api from '../config/api';

/* export const createRepository = values => api.post('/repositories', values);

export const addMemberToOrg = values => api.post(`/organization/${values.username}`);

export const addOwnerToRepo = values =>
  api.post(`/repositories/${values.repository}/codeowners/`, {
    codeowners: values.owners.split(',')
  });
*/

export const getRepositories = () => api.get('/repositories?limit=100&page=2');

export const createRepository = values =>
  create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 55000
  }).post('/posts', values);

export const addMemberToOrg = values =>
  create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 55000
  }).post('/posts', values);

export const addOwnerToRepo = values =>
  create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 55000
  }).post('/posts', values);
