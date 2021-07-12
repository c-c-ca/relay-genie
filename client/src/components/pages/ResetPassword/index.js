import React from 'react';
import { useVerifyToken } from '../../../hooks';
import VerifiableMessage from '../../VerifiableMessage';
import ResetPasswordSuccess from './ResetPasswordSuccess';

const Welcome = () => {
  const verifyToken = useVerifyToken();

  return (
    <VerifiableMessage
      verify={verifyToken('RESET_PASSWORD')}
      success={ResetPasswordSuccess}
    />
  );
};

export default Welcome;
