import React from 'react';
import MessageLayout from '../../../layout/MessageLayout';
import { GearIcon } from '../../../ui/icons';
import ConnectLocalAccountForm from './ConnectLocalAccountForm';
import ConnectThirdPartyAccountForm from './ConnectThirdPartyAccountForm';

const ConnectAccountSuccess = ({ strategy }) => {
  const isLocal = strategy == 'LOCAL';

  return (
    <MessageLayout
      title="We've Seen You Before!"
      message="An account with your email has already been registered. You may want to connect your account."
      icon={() => (
        <div className="u-icon-yellow">
          <GearIcon />
        </div>
      )}
      form={
        isLocal ? <ConnectLocalAccountForm /> : <ConnectThirdPartyAccountForm />
      }
    />
  );
};

export default ConnectAccountSuccess;
