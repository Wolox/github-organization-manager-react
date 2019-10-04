import { create } from 'apisauce';

import api from '../config/api';

/*
export const createTeam = values => api.post('/teams', values);
export const addMembersToTeam = values => {
  api.post(`/teams/${values.team}/members`, {
    usernames: values.usernames.split(',')
  });
}; */

export const getTeams = () => api.get('/teams');

export const createTeam = values =>
  create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 55000
  }).post('/posts', values);

export const addMembersToTeam = values =>
  create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 55000
  }).post('/posts', values);
