import React from 'react';
import { useVerifyToken } from '../../../hooks';
import VerifiableMessage from '../../VerifiableMessage';
import ConnectAccountSuccess from './ConnectAccountSuccess';

const ConnectAccount = () => {
  const verifyToken = useVerifyToken();

  return (
    <VerifiableMessage
      verify={verifyToken('CONNECT_ACCOUNT')}
      success={ConnectAccountSuccess}
    />
  );
};

export default ConnectAccount;
