import api from '../config/api';

export const createTeam = values => api.post('/teams', values);

export const addMembersToTeam = values =>
  api.post(`/teams/${values.team}/members`, {
    usernames: values.usernames.split(',')
  });

export const getTeams = (page = 1) =>
  api.get('/teams', {
    page
  });

export const getAllTeams = () =>
  new Promise(resolve => {
    const requests = {
      to: 1,
      [Symbol.asyncIterator]() {
        return {
          current: this.to,
          limitRequest: 100,
          async next() {
            let dataRequest = [];
            await getTeams(this.current++)
              .then(({ data: { teams } }) => (dataRequest = teams))
              .catch(() => {
                resolve({ ok: false });
              });
            if (dataRequest.length === this.limitRequest) {
              return { done: false, value: dataRequest };
            }
            return { done: true };
          }
        };
      }
    };

    (async () => {
      let data = [];
      for await (const value of requests) {
        data = [...data, ...value];
      }
      resolve({ data, ok: true });
    })();
  });
