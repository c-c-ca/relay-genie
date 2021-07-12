import React, { useState } from 'react';
import './Login.scss';

import history from '../../../history';
import Success from '../../Success';
import ThirdPartyButtonGroup from '../../ThirdPartyButtonGroup';
import FormLayout from '../../layout/FormLayout';

import LoginForm from './LoginForm';
import PasswordResetForm from './PasswordResetForm';
import SignUpSection from './SignUpSection';

const LOGIN_TITLE = 'Log in to your account';
const RESET_PASSWORD_TITLE = 'Reset your password';

const Login = ({
  resetPassword,
  setResetPassword,
  passwordRecoveryEmailSent,
  sendPasswordRecoveryEmail,
}) => (
  <FormLayout
    title={resetPassword ? RESET_PASSWORD_TITLE : LOGIN_TITLE}
    classList={['login']}
    footer={
      <SignUpSection
        resetPassword={resetPassword}
        setResetPassword={setResetPassword}
      />
    }
  >
    {resetPassword ? (
      <PasswordResetForm onSend={sendPasswordRecoveryEmail} />
    ) : (
      <LoginForm />
    )}
    {resetPassword ? null : (
      <>
        <div className="forgot-password-wrapper">
          <a
            to="password-reset"
            className="forgot-password"
            onClick={e => {
              e.preventDefault();
              setResetPassword(true);
            }}
          >
            Forgot your password?
          </a>
        </div>
        <ThirdPartyButtonGroup text="Sign In with" />
      </>
    )}
    {passwordRecoveryEmailSent && (
      <Success
        title="It's All Good!"
        message="We just sent you a password recovery email. Please check your inbox."
        onDismiss={() => history.push('/')}
      />
    )}
  </FormLayout>
);

const LoginContainer = () => {
  const [resetPassword, setResetPassword] = useState(false);
  const [passwordRecoveryEmailSent, sendPasswordRecoveryEmail] =
    useState(false);

  return (
    <Login
      resetPassword={resetPassword}
      setResetPassword={setResetPassword}
      passwordRecoveryEmailSent={passwordRecoveryEmailSent}
      sendPasswordRecoveryEmail={() => sendPasswordRecoveryEmail(true)}
    />
  );
};

export default LoginContainer;
