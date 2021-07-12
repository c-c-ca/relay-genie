import React from 'react';
import { Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import axios from 'axios';

import { useAuth } from '../../../../hooks';
import history from '../../../../history';

import {
  validateUsernameLogin,
  validatePassword,
} from '../../../../utils/validation';

import Input from '../../../ui/Input';

import LoginPageForm from '../LoginPageForm';

const LoginFormContainer = () => {
  const [, { loadUser }] = useAuth();

  const onSubmit = async ({ username, password }) => {
    const { error } = (await axios.post('/api/login', { username, password }))
      .data;

    if (error) {
      return { [FORM_ERROR]: error };
    }

    loadUser();
    history.push('/');
  };

  return <LoginForm onSubmit={onSubmit} />;
};

const LoginForm = props => (
  <LoginPageForm {...props} buttonText="Log In">
    <Field
      name="username"
      type="text"
      placeholder="Username"
      validate={validateUsernameLogin}
      component={Input}
    />
    <Field
      name="password"
      type="password"
      placeholder="Password"
      validate={validatePassword}
      component={Input}
    />
  </LoginPageForm>
);

export default LoginFormContainer;
