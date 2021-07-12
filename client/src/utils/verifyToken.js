import axios from 'axios';

const verifyToken = async token =>
  (await axios.post('/api/verify-token', { token })).data;

export default verifyToken;
