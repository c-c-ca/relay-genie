import React, { useReducer } from 'react';
import CollapsibleMenu from '../components/SideBar/CollapsibleMenu';

const CollapsibleSideBarButtonContainer = props => {
  const [isCollapsed, collapse] = useReducer(isCollapsed => !isCollapsed, true);

  return (
    <CollapsibleMenu
      {...props}
      isCollapsed={isCollapsed}
      onCollapse={collapse}
    />
  );
};

export default CollapsibleSideBarButtonContainer;
