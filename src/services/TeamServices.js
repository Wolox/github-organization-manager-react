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
            const {
              data: { teams },
              ok,
              status
            } = await getTeams(this.current++);

            if (!ok) {
              resolve({ ok, status });
            }
            if (teams && teams.length === this.limitRequest) {
              return { done: false, value: teams };
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
