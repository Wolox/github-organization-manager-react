import api from '../config/api';

export const createRepository = async values => {
  console.log('bbbbbbbbb', values);
  const response = await api.post('/repositories', values);
  if (response.ok) {
    return response.data;
  }
  throw response;
};
