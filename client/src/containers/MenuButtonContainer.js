import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidenav } from '../store/actions';
import MenuButton from '../components/ui/MenuButton';

const MenuButtonContainer = () => {
  const dispatch = useDispatch();

  const handleOnClick = useCallback(() => dispatch(toggleSidenav()));

  return <MenuButton onClick={handleOnClick} />;
};

export default MenuButtonContainer;
