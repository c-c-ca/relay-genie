// import React from 'react';
// import axios from 'axios';
// import { FORM_ERROR } from 'final-form';
// import history from '../../../../../history';
// import UserInfoForm from '../../../../ui/UserInfoForm';
// import { useQueryParams } from '../../../../../hooks/useQueryParams';
// import { useAuth } from '../../../../../hooks';

// import {
//   validatePasswordsMatch,
//   composeFormValidators,
// } from '../../../../../utils/validation';

// const WelcomeSuccessFormContainer = ({ ...props }) => {
//   const { token } = useQueryParams();
//   const [, { loadUser }] = useAuth();

//   const validate = formValues =>
//     composeFormValidators(formValues, [validatePasswordsMatch]);

//   const onSubmit = async ({ username, password }) => {
//     const { error } = (
//       await axios.post('/api/create-user', { username, password, token })
//     ).data;

//     if (error) {
//       return { [FORM_ERROR]: error };
//     }

//     loadUser();
//     history.push('/');
//   };

//   return (
//     <UserInfoForm
//       {...props}
//       username
//       validate={validate}
//       onSubmit={onSubmit}
//       buttonText="Create Account"
//     />
//   );
// };

// export default WelcomeSuccessFormContainer;
