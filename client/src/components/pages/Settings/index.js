import React from 'react';
import './Settings.scss';
import PageLayout from '../../layout/PageLayout';
import Container from '../../layout/Container';
import SettingsMenu from './SettingsMenu';
import SettingsDashboard from './SettingsDashboard';
import AccountView from './SettingsDashboard/AccountView';
import PasswordView from './SettingsDashboard/PasswordView';

const views = {
  account: <AccountView />,
  password: <PasswordView />,
  events: <h1>Events View</h1>,
  notifications: <h1>Notifications View</h1>,
};

const Settings = props => (
  <PageLayout>
    <Container>
      <div className="settings">
        <h1 className="settings__header">Settings</h1>
        <div className="settings__content">
          <SettingsMenu {...props} menuItems={Object.keys(views)} />
          <SettingsDashboard {...props}>{views[props.view]}</SettingsDashboard>
        </div>
      </div>
    </Container>
  </PageLayout>
);

export default Settings;
