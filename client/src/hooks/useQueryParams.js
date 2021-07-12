import { useLocation } from 'react-router-dom';
import { parseQueryString } from '../utils';

export const useQueryParams = () => {
  const { search } = useLocation();
  return search ? parseQueryString(search) : {};
};
