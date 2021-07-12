// import React from 'react';
// import './WelcomeConnectForm.scss';
// // import WelcomeFormLayout from '../../WelcomeFormLayout';
// import HoverFormLayout from '../../../../layout/HoverFormLayout';
// import Button from '../../../../ui/Button';
// import { CheckIcon, CrossIcon } from '../../../../ui/icons';

// const WelcomeConnectForm = ({ onConnect = () => {} }) => {
//   const buttons = [
//     {
//       text: 'Yes Please!',
//       icon: <CheckIcon />,
//       onClick: onConnect,
//       to: '/',
//     },
//     {
//       text: `No Thank You`,
//       icon: <CrossIcon />,
//       to: '/',
//     },
//   ];

//   return (
//     <HoverFormLayout title="Want to connect your account?" color="yellow">
//       {buttons.map((props, i) => (
//         <div className="welcome-failure-form__button-outer-wrapper">
//           <div className="welcome-failure-form__button-inner-wrapper">
//             <Button {...props} color="yellow" />
//           </div>
//         </div>
//       ))}
//     </HoverFormLayout>
//   );
// };

// export default WelcomeConnectForm;
