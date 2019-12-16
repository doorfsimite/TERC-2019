import axios from 'axios';
//10.208.3.266
const api = axios.create({ baseURL: 'http://10.208.3.226:3003/'});

export default api;