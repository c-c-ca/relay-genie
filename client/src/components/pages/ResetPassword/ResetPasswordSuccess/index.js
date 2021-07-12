import React from 'react';
import MessageLayout from '../../../layout/MessageLayout';
import { KeyClassicIcon } from '../../../ui/icons';
import ResetPasswordSuccessForm from './ResetPasswordSuccessForm';

const ResetPasswordSuccess = () => {
  return (
    <MessageLayout
      title="Let's Reset Your Password!"
      message="Reset your password"
      icon={() => (
        <div className="u-icon-blue">
          <KeyClassicIcon />
        </div>
      )}
      form={<ResetPasswordSuccessForm />}
    />
  );
};

export default ResetPasswordSuccess;
