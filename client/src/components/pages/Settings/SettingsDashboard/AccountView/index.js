import React from 'react';
import './AccountView.scss';
import axios from 'axios';
import { FORM_ERROR } from 'final-form';

import { useAuth } from '../../../../../hooks';

import ProfileForm from './ProfileForm';
import LinkedAccounts from './LinkedAccounts';
import AccountDelete from './AccountDelete';

const AccountView = props => (
  <div className="account-view">
    <div className="account-view__row">
      <ProfileForm {...props} />
    </div>
    <div className="account-view__row">
      <LinkedAccounts {...props} />
    </div>
    <div className="account-view__row">
      <AccountDelete {...props} />
    </div>
  </div>
);

const AccountViewContainer = props => {
  const [auth, { loadUser }] = useAuth();

  const onDelete = async ({ email, ...body }) => {
    const { error } = (await axios.delete('/users', body)).data;

    if (error) {
      return { [FORM_ERROR]: error };
    }

    loadUser();
  };

  return <AccountView {...props} {...auth} onDelete={onDelete} />;
};

export default AccountViewContainer;
