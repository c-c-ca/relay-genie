import axios from 'axios';
import { FETCH_USER } from './actionTypes';

export const fetchUser = () => async dispatch =>
  dispatch({
    type: FETCH_USER,
    payload: (await axios.get('/api/current-user')).data,
  });
