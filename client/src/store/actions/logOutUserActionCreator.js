import axios from 'axios';
import { FETCH_USER } from './actionTypes';

export const logOutUser = () => async dispatch =>
  dispatch({
    type: FETCH_USER,
    payload: (await axios.get('/api/logout')).data,
  });
