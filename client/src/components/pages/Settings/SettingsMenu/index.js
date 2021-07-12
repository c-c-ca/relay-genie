import React from 'react';
import './SettingsMenu.scss';
import SettingsMenuItem from './SettingsMenuItem';

const SettingsMenu = ({ view, onChangeView, menuItems }) => (
  <div className="settings-menu">
    {menuItems.map((name, i) => (
      <SettingsMenuItem
        active={name == view}
        text={name}
        onSelect={() => onChangeView(name)}
      />
    ))}
  </div>
);

export default SettingsMenu;
