import axios from 'axios';
import { FETCH_USER } from './actionTypes';

export const connectUser = token => async dispatch =>
  dispatch({
    type: FETCH_USER,
    payload: (await axios.post('/api/connect-user', { token })).data,
  });
