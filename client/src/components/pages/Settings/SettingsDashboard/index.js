import React from 'react';
import './SettingsDashboard.scss';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
import AccountView from './AccountView';
import PasswordView from './PasswordView';
import {
  SaveIcon,
  ExclamationSolid,
  GoogleButtonIcon,
  TwitterIcon,
  GithubIcon,
  FacebookIcon,
} from '../../../ui/icons';

const SettingsDashboard = ({ view, children }) => (
  <div className="settings-dashboard">
    <h2 className="settings-dashboard__header">{view}</h2>
    {children}
  </div>
);

export default SettingsDashboard;
