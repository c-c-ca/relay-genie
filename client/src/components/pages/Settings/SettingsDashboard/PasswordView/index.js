import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Button from '../../../../ui/Button';

// import './WelcomeForm.scss';

import Input from '../../../../ui/Input';
// import Loader from '../../Spinner/Loader/Loader';

// import { validateEmail } from '../../../../utils/validation';

const PasswordView = () => (
  <div className="settings-dashboard__form-wrapper">
    <div className="settings-dashboard__section-header">
      <h4 className="settings-dashboard__section-header-title">
        Reset your password
      </h4>
      <h5 className="settings-dashboard__section-header-sub-title">
        Change your password
      </h5>
    </div>
    <Form onSubmit={() => {}}>
      {({
        handleSubmit,
        submitting,
        submitError,
        valid,
        modifiedSinceLastSubmit,
      }) => (
        <form className="login-form" onSubmit={handleSubmit}>
          {submitError && this.renderSubmitError(submitError)}
          <div className="settings-dashboard__row">
            <div className="settings-dashboard__field-wrapper">
              <Field
                name="password"
                type="password"
                placeholder="New password"
                //     validate={validatePassword}
                component={Input}
              />
            </div>
            <div className="settings-dashboard__field-wrapper">
              <Field
                name="confirm"
                type="password"
                placeholder="Confirm new password"
                label="Confirm "
                //     validate={validateConfirm}
                component={Input}
              />
            </div>
          </div>

          <div className="settings-dashboard__button-wrapper u-margin-top-medium">
            <Button text="Reset Password" color="primary" />
          </div>
        </form>
      )}
    </Form>
  </div>
);
export default PasswordView;
