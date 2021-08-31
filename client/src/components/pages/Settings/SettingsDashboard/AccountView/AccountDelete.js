import React from 'react';
import AccountDeleteButton from './AccountDeleteButton';

const AccountDelete = props => (
  <div className="account-view__section account-view__section--delete">
    <div className="account-view__section-header">
      <h4 className="account-view__section-header-title">Delete account</h4>
      <h5 className="account-view__section-header-sub-title">
        By deleting your account you will lose all your data
      </h5>
    </div>
    <div className="account-view__button-wrapper"></div>
    {/* <div className="settings-dashboard__section-content"></div> */}
    <AccountDeleteButton {...props} />
  </div>
);

export default AccountDelete;
