import React from 'react';
import './SettingsDashboard.scss';

const SettingsDashboard = ({ view, component: Component }) => (
  <div className="settings-dashboard">
    <h2 className="settings-dashboard__header">{view}</h2>
    <Component />
  </div>
);

export default SettingsDashboard;
