import React from 'react';
import './SideBar.scss';
import { Link } from 'react-router-dom';

const SideBarButton = ({ text, icon: Icon, path, onClick }) => (
  <Link className="sidebar__item" to={path} onClick={onClick}>
    <div className="sidebar__button">
      <div className="sidebar__icon">{Icon && <Icon />}</div>
      <a className="sidebar__link">{text}</a>
    </div>
  </Link>
);

export default SideBarButton;
