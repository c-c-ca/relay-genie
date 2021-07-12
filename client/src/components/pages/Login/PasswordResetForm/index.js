import React from 'react';
import { Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import axios from 'axios';

import { validateEmail } from '../../../../utils/validation';
import Input from '../../../ui/Input';
import LoginPageForm from '../LoginPageForm';

const PasswordResetFormContainer = ({ onSend }) => {
  const onSubmit = async ({ email }) => {
    const { error } = (await axios.post('/api/reset-password', { email })).data;

    if (error) {
      return { [FORM_ERROR]: error };
    }

    onSend();
  };

  return <PasswordResetForm onSubmit={onSubmit} />;
};

const PasswordResetForm = props => (
  <LoginPageForm {...props} buttonText="Send Password Reset Email">
    <Field
      name="email"
      type="email"
      placeholder="Email"
      validate={validateEmail}
      component={Input}
    />
  </LoginPageForm>
);

export default PasswordResetFormContainer;
