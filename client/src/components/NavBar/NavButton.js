import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const ButtonMenu = props => (
  <div {...props} className="navbar__button">
    <FontAwesomeIcon icon={faBars} size="2x" />
  </div>
);

export default ButtonMenu;
