import axios from 'axios';

const convoiesAPI = axios.create({
  baseURL: 'https://my-json-server.typicode.com/itayalony/VueDB'
});

export default convoiesAPI;
