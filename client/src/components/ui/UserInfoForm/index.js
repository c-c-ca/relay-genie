import React from 'react';
import { Form, Field } from 'react-final-form';
import HoverFormLayout from '../../layout/HoverFormLayout';
import FormButton from '../FormButton';
import FormError from '../FormError';
import Input from '../Input';

import {
  validateUsername,
  validatePassword,
  validateConfirm,
} from '../../../utils/validation';

const renderPasswordFields = password =>
  password ? (
    <>
      <Field
        name="password"
        type="password"
        placeholder="Password"
        validate={validatePassword}
        component={Input}
      />
      <Field
        name="confirm"
        type="password"
        placeholder="Password"
        label="Confirm Password"
        validate={validateConfirm}
        component={Input}
      />
    </>
  ) : null;

// const renderFormFields = local => [
//   <Field
//     name="username"
//     type="text"
//     placeholder="Username"
//     validate={validateUsername}
//     component={Input}
//   />,
//   ...renderPasswordFields(local),
// ];

const renderUsernameField = username =>
  username ? (
    <Field
      name="username"
      type="text"
      placeholder="Username"
      validate={validateUsername}
      component={Input}
    />
  ) : null;

const UserInfoForm = ({ local, buttonText, username, password, ...props }) => (
  <HoverFormLayout>
    <Form {...props}>
      {({ handleSubmit, submitError, ...props }) => (
        <form onSubmit={handleSubmit}>
          {submitError && <FormError errorMessage={submitError} />}
          {renderUsernameField(username)}
          {renderPasswordFields(password)}
          {/* {renderFormFields(password, local)} */}
          <FormButton {...props} text={buttonText} />
        </form>
      )}
    </Form>
  </HoverFormLayout>
);

export default UserInfoForm;
