import api from '~config/api';

export const createRepository = async values => {
  const response = await api.post('/repositories', values);
  if (response.ok) {
    return response.data;
  }
  throw response;
};

export const addMemberToOrg = async values => {
  const response = await api.post(`/organization/${values.username}`);
  if (response.ok) {
    return response.data;
  }
  throw response;
};

export const addOwnerToRepo = async values => {
  const response = await api.post(`/repositories/${values.repository}/codeowners/`, {
    codeowners: values.owners.split(',')
  });
  if (response.ok) {
    return response.data;
  }
  throw response;
};

export const getRepositories = async () => {
  const response = await api.get('/repositories?limit=100&page=2');
  if (response.ok) {
    return response.data;
  }
  throw response;
};
