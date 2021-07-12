import React from 'react';
import './SideBar.scss';

import SideBarButton from './SideBarButton';
import MenuButtonContainer from '../../containers/MenuButtonContainer';
import CollapsibleMenuContainer from '../../containers/CollapsibleMenuContainer';

import Modal from '../layout/Modal';
import Logo from '../ui/Logo';

const SideBar = ({ show, onDismiss, menuItems }) => (
  <Modal show={show} onDismiss={onDismiss}>
    <div className={`sidebar sidebar--${show ? 'show' : 'hide'}`}>
      <div className="sidebar__group">
        <div className="sidebar__header">
          <div className="sidebar__menu-button">
            <MenuButtonContainer />
          </div>
          <Logo />
        </div>
      </div>
      <div className="sidebar__group">
        {Object.values(menuItems).map(
          ({ menu, onClick = () => {}, ...props }) =>
            menu ? (
              <CollapsibleMenuContainer {...props} menuItems={menu} />
            ) : (
              <SideBarButton
                {...props}
                onClick={() => {
                  onClick();
                  onDismiss();
                }}
              />
            )
        )}
      </div>
    </div>
  </Modal>
);

export default SideBar;
