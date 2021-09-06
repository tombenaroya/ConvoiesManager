import convoiesAPI from 'api/convoies/convoiesAPI';

const api = {
  getConvoies: async () => await convoiesAPI.get('/convoies')
};

export default api;
