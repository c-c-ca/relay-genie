import React from 'react';
import { useVerifyToken } from '../../../hooks';
import VerifiableMessage from '../../VerifiableMessage';
import WelcomeSuccess from './WelcomeSuccess';

const Welcome = () => {
  const verifyToken = useVerifyToken();

  return (
    <VerifiableMessage
      verify={verifyToken('CREATE_ACCOUNT')}
      success={WelcomeSuccess}
    />
  );
};

export default Welcome;
