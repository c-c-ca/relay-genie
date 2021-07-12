// import React from 'react';
// import { useQueryParams } from '../../../hooks';
// import WelcomeSuccess from './WelcomeSuccess';
// import WelcomeConnect from './WelcomeConnect';
// import WelcomeFailure from './WelcomeFailure';
// import Verifiable from '../../Verifiable';
// import { verifyToken } from '../../../utils';
// import history from '../../../history';

// const VerifiedComponent = ({ response: { action, strategy }, ...props }) => {
//   const isLocal = strategy == 'LOCAL';

//   switch (action) {
//     case 'CREATE_ACCOUNT':
//       return <WelcomeSuccess {...props} password={isLocal} />;
//     case 'CONNECT_ACCOUNT':
//       return <WelcomeConnect {...props} isLocal={isLocal} />;
//     default:
//       return <WelcomeFailure {...props} />;
//   }
// };

// const WelcomeContainer = props => {
//   const { token } = useQueryParams();

//   return (
//     <Verifiable
//       {...props}
//       verify={() => verifyToken(token)}
//       onDismiss={() => history.push('/')}
//       component={VerifiedComponent}
//       // success={() => <WelcomeSuccess {...props} local={local == 'true'} />}
//       // failure={() => <WelcomeFailure {...props} />}
//     />
//   );
// };

// export default WelcomeContainer;
