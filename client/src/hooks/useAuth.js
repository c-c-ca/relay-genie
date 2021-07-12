import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, logOutUser, connectUser } from '../store/actions';

export const useAuth = () => {
  const auth = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  const loadUser = () => dispatch(fetchUser());

  const connect = token => dispatch(connectUser(token));

  const logOut = () => dispatch(logOutUser());

  return [auth, { loadUser, logOut, connect }];
};
