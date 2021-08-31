import React from 'react';

import {
  GoogleButtonIcon,
  TwitterIcon,
  GithubIcon,
  FacebookIcon,
} from '../../../../ui/icons';

import ConnectButton from '../ConnectButton';

const strategies = [
  { name: 'Facebook', icon: FacebookIcon },
  { name: 'Twitter', icon: TwitterIcon },
  { name: 'Google', icon: GoogleButtonIcon },
  { name: 'GitHub', icon: GithubIcon },
];

const Connect = ({ icon: Icon, name, email, ...props }) => (
  <div className="settings-dashboard__connect">
    <div className="settings-dashboard__connect-box">
      <div
        className={`settings-dashboard__icon-wrapper settings-dashboard__icon-wrapper--${name.toLowerCase()}`}
      >
        <Icon />
      </div>
      {`Sign In with ${name}`}
    </div>
    {/* <SettingsDashboardButton text="Connect" /> */}
    <ConnectButton
      text="Connect"
      to={`/connect/${name.toLowerCase()}`}
      disabled={!email || props[`${name.toLowerCase()}Profile`]}
    />
  </div>
);

const LinkedAccounts = props => (
  <div className="account-view__section">
    <div className="account-view__section-header">
      <h4 className="account-view__section-header-title">Linked Accounts</h4>
      <h5 className="account-view__section-header-sub-title">
        We use this to let you sign in and populate your profile information
      </h5>
    </div>
    <div className="account-view__section-content">
      {strategies.map(strategy => (
        <Connect {...strategy} {...props} email={props.email} />
      ))}
    </div>
  </div>
);

export default LinkedAccounts;
