import React from 'react';
import './FailureForm.scss';
import HoverFormLayout from '../../layout/HoverFormLayout';
import Button from '../../ui/Button';
import { HomeIcon, SignOnIcon, RegisterIcon } from '../../ui/icons';

const buttons = [
  { text: 'Home', icon: <HomeIcon />, to: '/' },
  { text: 'Register', icon: <RegisterIcon />, to: '/register' },
  { text: 'Sign In', icon: <SignOnIcon />, to: '/login' },
];

const FailureForm = () => (
  <HoverFormLayout title="Looking for one of these?" color="red">
    {buttons.map((props, i) => (
      <div className="failure-form__button-outer-wrapper">
        <div className="failure-form__button-inner-wrapper">
          <Button {...props} color="red-dark" />
        </div>
      </div>
    ))}
  </HoverFormLayout>
);

export default FailureForm;
