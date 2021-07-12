// import React from 'react';
// import { Form, Field } from 'react-final-form';
// import WelcomeFormLayout from '../../WelcomeFormLayout';
// import FormButton from '../../../../ui/FormButton';
// import FormError from '../../../../ui/FormError';
// import Input from '../../../../ui/Input';

// import {
//   validateUsername,
//   validatePassword,
//   validateConfirm,
// } from '../../../../../utils/validation';

// const renderPasswordFields = local =>
//   local
//     ? [
//         <Field
//           name="password"
//           type="password"
//           placeholder="Password"
//           validate={validatePassword}
//           component={Input}
//         />,
//         <Field
//           name="confirm"
//           type="password"
//           placeholder="Password"
//           label="Confirm Password"
//           validate={validateConfirm}
//           component={Input}
//         />,
//       ]
//     : [];

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

// const WelcomeSuccessForm = ({ local, ...props }) => (
//   <WelcomeFormLayout>
//     <Form {...props}>
//       {({ handleSubmit, submitError, ...props }) => (
//         <form onSubmit={handleSubmit}>
//           {submitError && <FormError errorMessage={submitError} />}
//           {renderFormFields(local)}
//           <FormButton {...props} text="Create Account" />
//         </form>
//       )}
//     </Form>
//   </WelcomeFormLayout>
// );

// export default WelcomeSuccessForm;
