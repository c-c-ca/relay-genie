import React from 'react';
import './LoginPageForm.scss';
import { Form } from 'react-final-form';

import FormButton from '../../../ui/FormButton';
import FormError from '../../../ui/FormError';

const LoginPageForm = ({ onSubmit, buttonText, children }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, submitError, ...props }) => (
      <form className="login-page-form" onSubmit={handleSubmit}>
        {submitError && <FormError errorMessage={submitError} />}
        {children}
        <FormButton {...props} text={buttonText} />
      </form>
    )}
  </Form>
);

export default LoginPageForm;
