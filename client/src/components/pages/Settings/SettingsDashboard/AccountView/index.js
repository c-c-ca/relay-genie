import React from 'react';
// import '../SettingsDashboard.scss';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { useAuth } from '../../../../../hooks';
import Input from '../../../../ui/Input';
import Button from '../../../../ui/Button';
import {
  SaveIcon,
  ExclamationSolid,
  GoogleButtonIcon,
  TwitterIcon,
  GithubIcon,
  FacebookIcon,
} from '../../../../ui/icons';

import { validateUsername } from '../../../../../utils/validation';

const strategies = [
  { name: 'Facebook', icon: FacebookIcon },
  { name: 'Twitter', icon: TwitterIcon },
  { name: 'Google', icon: GoogleButtonIcon },
  { name: 'GitHub', icon: GithubIcon },
];

const Connect = ({ icon: Icon, name }) => (
  <div className="settings-dashboard__connect">
    <div className="settings-dashboard__connect-box">
      <div
        className={`settings-dashboard__icon-wrapper settings-dashboard__icon-wrapper--${name.toLowerCase()}`}
      >
        <Icon />
      </div>
      {`Sign In with ${name}`}
    </div>
    {/* <SettingsDashboardButton text="Connect" /> */}
    <Button text="Connect" color="grey" to={`/connect/${name.toLowerCase()}`} />
  </div>
);

const AccountView = ({ username }) => (
  <div className="settings-dashboard__form-wrapper">
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
                name="username"
                type="text"
                placeholder="Username"
                label="Display name"
                initialValue={username}
                validate={validateUsername}
                component={Input}
              />
            </div>
            <div className="settings-dashboard__field-wrapper">
              <Field
                name="password"
                type="password"
                placeholder="Password"
                label="Full Name"
                // validate={validatePassword}
                component={Input}
              />
            </div>
          </div>
          <div className="settings-dashboard__row">
            <div className="settings-dashboard__field-wrapper">
              <Field
                name="email"
                type="email"
                placeholder="Username"
                label="Email address"
                // validate={validateUsernameLogin}
                component={Input}
              />
            </div>
            <div className="settings-dashboard__field-wrapper">
              <Field
                name="confirm"
                type="username"
                placeholder="John Smith"
                label="Full name"
                // validate={validatePassword}
                component={Input}
              />
            </div>
          </div>
          <div className="settings-dashboard__row">
            <div className="settings-dashboard__section">
              <div className="settings-dashboard__section-header">
                <h4 className="settings-dashboard__section-header-title">
                  Linked Accounts
                </h4>
                <h5 className="settings-dashboard__section-header-sub-title">
                  We use this to let you sign in and populate your profile
                  information
                </h5>
              </div>
              <div className="settings-dashboard__section-content">
                {strategies.map(props => (
                  <Connect {...props} />
                ))}
              </div>
            </div>
          </div>
          <div className="settings-dashboard__row">
            <div className="settings-dashboard__section settings-dashboard__section--delete">
              <div className="settings-dashboard__section-header">
                <h4 className="settings-dashboard__section-header-title">
                  Delete account
                </h4>
                <h5 className="settings-dashboard__section-header-sub-title">
                  By deleting your account you will lose all your data
                </h5>
              </div>
              <div className="settings-dashboard__button-wrapper">
                <Button
                  text="Delete Account"
                  color="red"
                  icon={<ExclamationSolid />}
                />
              </div>
              {/* <div className="settings-dashboard__section-content"></div> */}
            </div>
          </div>
          <div className="settings-dashboard__button-wrapper u-margin-top-medium">
            <Button text="Save Changes" color="primary" icon={<SaveIcon />} />
          </div>
        </form>
      )}
    </Form>
  </div>
);

const AccountViewContainer = props => {
  const [auth] = useAuth();

  console.log(auth);

  return <AccountView {...props} {...auth} />;
};

export default AccountViewContainer;
