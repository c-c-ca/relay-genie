import React from 'react';
import './ProfileForm.scss';
import axios from 'axios';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

import { useAuth } from '../../../../../../hooks';
import {
  validateEmail,
  validateUsername,
} from '../../../../../../utils/validation';

import DashboardButton from '../../DashboardButton';
import Input from '../../../../../ui/Input';
import FormError from '../../../../../ui/FormError';
import { SaveIcon } from '../../../../../ui/icons';

const ProfileForm = ({
  username,
  email,
  firstName,
  lastName,
  photo,
  onSubmit,
}) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, submitting, submitError }) => (
      <form className="profile-form" onSubmit={handleSubmit}>
        {submitError && <FormError errorMessage={submitError} />}
        <div className="profile-form__row">
          <div className="profile-form__avatar">
            <h2 className="profile-form__avatar-title">Avatar</h2>
            <img className="profile-form__avatar-image" src={photo} />
          </div>
        </div>
        <div className="profile-form__row">
          <div className="profile-form__field-wrapper">
            <Field
              name="username"
              type="text"
              description="Visible to other members"
              label="Username"
              initialValue={username}
              validate={validateUsername}
              component={Input}
            />
          </div>
          <div className="profile-form__field-wrapper">
            <Field
              name="email"
              type="email"
              description="For notifications and logging in"
              initialValue={email}
              label="Email address"
              disabled
              validate={validateEmail}
              component={Input}
            />
          </div>
        </div>
        <div className="profile-form__row">
          <div className="profile-form__field-wrapper">
            <Field
              name="firstName"
              type="name"
              initialValue={firstName}
              label="First name"
              // validate={validatePassword}
              component={Input}
            />
          </div>
          <div className="profile-form__field-wrapper">
            <Field
              name="lastName"
              type="name"
              initialValue={lastName}
              label="Last name"
              // validate={validatePassword}
              component={Input}
            />
          </div>
          {/* <div className="profile-form__field-wrapper">
	<Field
	  name="phone"
	  type="tel"
	  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
	  description="For receiving notifications"
	  placeholder="e.g. 999-999-9999"
	  label="Phone Number"
	  // validate={validatePassword}
	  component={Input}
	/>
      </div> */}
        </div>
        <div className="profile-form__row">
          <div className="profile-form__button-wrapper">
            <DashboardButton
              text="Save Changes"
              icon={SaveIcon}
              submitting={submitting}
            />
            {/* <FormButton
	text="Save Changes"
	color="primary"
	icon={<SaveIcon />}
      /> */}
          </div>
        </div>
      </form>
    )}
  </Form>
);

const ProfileFormContainer = props => {
  const [, { loadUser }] = useAuth();

  const onSubmit = async ({ email, ...body }) => {
    const { error } = (await axios.post('/users', body)).data;

    if (error) {
      return { [FORM_ERROR]: error };
    }

    loadUser();
  };

  return <ProfileForm {...props} onSubmit={onSubmit} />;
};

export default ProfileFormContainer;
