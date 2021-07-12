import React from 'react';
import { TriangleDown } from '../../ui/icons';

const CollapsibleSideBarButton = ({
  text,
  icon,
  onClick,
  active,
  collapsed,
}) => (
  <div
    className="sidebar__button sidebar__button--collapsible"
    onClick={onClick}
  >
    <div className="sidebar__icon">{icon}</div>
    <a className="sidebar__link">{text}</a>
    <div
      className={`sidebar__triangle sidebar__triangle--${
        active ? 'open' : 'close'
      }`}
    >
      <TriangleDown />
    </div>
  </div>
);

export default CollapsibleSideBarButton;
