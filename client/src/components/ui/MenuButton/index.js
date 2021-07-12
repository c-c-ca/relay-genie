import React from 'react';
import './MenuButton.scss';
import MenuIcon from '../icons/MenuIcon';

const MenuButton = props => (
  <button className="menu-button" {...props}>
    <MenuIcon />
  </button>
);

export default MenuButton;
