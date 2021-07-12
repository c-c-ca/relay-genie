import React from 'react';
import { Collapse } from 'react-collapse';
import CollapsibleSideBarButton from './CollapsibleSideBarButton';
import SideBarButton from '../SideBarButton';

const CollapsibleMenu = ({
  text,
  icon: Icon,
  menuItems,
  isCollapsed,
  onCollapse,
  path,
}) => (
  <div className="sidenav__collapsible-menu">
    <CollapsibleSideBarButton
      text={text}
      icon={<Icon />}
      onClick={onCollapse}
      active={!isCollapsed}
    />
    <Collapse
      isOpened={!isCollapsed}
      initialStyle={{ height: 0, overflow: 'hidden' }}
    >
      <div className="sidebar__group--sub">
        {menuItems.map(props => (
          <SideBarButton {...props} path={path} />
        ))}
      </div>
    </Collapse>
  </div>
);

export default CollapsibleMenu;
