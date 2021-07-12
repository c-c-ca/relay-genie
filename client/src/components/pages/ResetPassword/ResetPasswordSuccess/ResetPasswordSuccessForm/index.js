import React from 'react';
import axios from 'axios';
import { FORM_ERROR } from 'final-form';
import history from '../../../../../history';
import UserInfoForm from '../../../../ui/UserInfoForm';
import { useQueryParams } from '../../../../../hooks/useQueryParams';
import { useAuth } from '../../../../../hooks';

import {
  validatePasswordsMatch,
  composeFormValidators,
} from '../../../../../utils/validation';

const ResetPasswordSuccessFormContainer = ({ ...props }) => {
  const { token } = useQueryParams();
  const [, { loadUser }] = useAuth();

  const validate = formValues =>
    composeFormValidators(formValues, [validatePasswordsMatch]);

  const onSubmit = async ({ password }) => {
    const { error } = (await axios.post('/api/password', { password, token }))
      .data;

    if (error) {
      return { [FORM_ERROR]: error };
    }

    loadUser();
    history.push('/');
  };

  return (
    <UserInfoForm
      {...props}
      password
      validate={validate}
      onSubmit={onSubmit}
      buttonText="Reset Password"
    />
  );
};

export default ResetPasswordSuccessFormContainer;
