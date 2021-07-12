import React from 'react';
import HoverFormLayout from '../../../layout/HoverFormLayout';
import Button from '../../../ui/Button';
import { CheckIcon, CrossIcon } from '../../../ui/icons';
import { useQueryParams, useAuth } from '../../../../hooks';
import history from '../../../../history';

const ConnectThirdPartyAccountForm = props => {
  const { token } = useQueryParams();
  const [, { connect, loadUser }] = useAuth();

  const buttons = [
    {
      text: 'Yes Please!',
      icon: <CheckIcon />,
      onClick: () => {
        connect(token);
        loadUser();
        history.push('/');
      },
      to: '/',
    },
    {
      text: `No Thank You`,
      icon: <CrossIcon />,
      to: '/',
    },
  ];

  return (
    <HoverFormLayout title="Want to connect your account?" color="yellow">
      {buttons.map((props, i) => (
        <div className="welcome-failure-form__button-outer-wrapper">
          <div className="welcome-failure-form__button-inner-wrapper">
            <Button {...props} color="yellow" />
          </div>
        </div>
      ))}
    </HoverFormLayout>
  );
};

export default ConnectThirdPartyAccountForm;
