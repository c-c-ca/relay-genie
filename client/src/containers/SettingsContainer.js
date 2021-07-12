import React from 'react';
import { useSelectSettingsView } from '../hooks';
import Settings from '../components/pages/Settings';

const SettingsContainer = () => {
  const [settingsView, selectSettingsView] = useSelectSettingsView();

  return <Settings view={settingsView} onChangeView={selectSettingsView} />;
};

export default SettingsContainer;
