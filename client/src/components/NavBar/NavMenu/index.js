import React from 'react';
import './NavMenu.scss';
import { Link } from 'react-router-dom';
import { useNavigation } from '../../../hooks';

const NavMenu = () => {
  const navItems = useNavigation();

  return (
    <ul className="navmenu">
      {navItems.map(({ text, path, onClick = () => {} }, i) => (
        <Link className="navmenu__link" to={path} onClick={onClick}>
          <li key={i} className="navmenu__item">
            {text}
          </li>
        </Link>
      ))}
    </ul>
  );
};
export default NavMenu;
