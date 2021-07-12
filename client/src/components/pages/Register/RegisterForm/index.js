import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

import './RegisterForm.scss';

import Input from '../../../ui/Input';
import FormButton from '../../../ui/FormButton';
import ThirdPartyButtonGroup from '../../../ThirdPartyButtonGroup';

import { validateEmail } from '../../../../utils/validation';

class RegisterForm extends Component {
  onSubmit = async ({ email }) => {
    await this.props.onRegister(email);
  };

  renderSubmitError(submitError) {
    return <div className="error submit-error">{submitError}</div>;
  }

  render() {
    return (
      <div className="register-form-container">
        <div className="register-form-wrapper">
          <Form onSubmit={this.onSubmit}>
            {({ handleSubmit, submitError, ...props }) => (
              <form className="register-form" onSubmit={handleSubmit}>
                {submitError && this.renderSubmitError(submitError)}
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  validate={validateEmail}
                  component={Input}
                />
                <FormButton text="Sign Up with Email" {...props} />
              </form>
            )}
          </Form>
          <ThirdPartyButtonGroup text="Sign Up with" />
        </div>
      </div>
    );
  }
}

export default RegisterForm;
