import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidenav } from '../store/actions';

export const useToggleSidenav = () => {
  const sidenavVisible = useSelector(({ showSideNav }) => showSideNav);
  const dispatch = useDispatch();
  const toggleSidenavVisibility = useCallback(() => dispatch(toggleSidenav()));

  return [sidenavVisible, toggleSidenavVisibility];
};
