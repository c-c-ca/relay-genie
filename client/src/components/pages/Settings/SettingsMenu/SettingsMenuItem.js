import React from 'react';
import './SettingsMenu.scss';

const SettingsMenuItem = ({ text, active, onSelect }) => (
  <button
    onClick={onSelect}
    className={`settings-menu__item ${
      active ? 'settings-menu__item--active' : ''
    }`}
  >
    {text}
  </button>
);

export default SettingsMenuItem;
