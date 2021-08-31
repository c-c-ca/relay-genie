import React from 'react';

import DeleteButton from '../DeleteButton';
import Warning from '../../../../Warning';

import {
  ExclamationSolid,
  CheckmarkOutlineIcon,
  CircleWithCrossIcon,
} from '../../../../ui/icons';
import Button from '../../../../ui/Button';
import AlertButton from '../../../../ui/AlertButton';

const AccountDeleteButton = ({ onDelete }) => (
  <AlertButton
    button={props => (
      <DeleteButton
        {...props}
        text="Delete account..."
        color="red"
        icon={<ExclamationSolid />}
      />
    )}
    alert={({ onDismiss, ...props }) => (
      <Warning
        {...props}
        onDismiss={onDismiss}
        title="Delete Account"
        message="Are you sure you want to delete your account?"
        buttons={[
          <Button
            onClick={onDelete}
            to="/"
            color="red"
            text="Delete Account"
            icon={<CheckmarkOutlineIcon />}
          />,
          <Button
            onClick={e => {
              e.preventDefault();
              onDismiss();
            }}
            color="purple"
            text="Cancel"
            icon={<CircleWithCrossIcon />}
          />,
        ]}
      />
    )}
  />
);

export default AccountDeleteButton;
