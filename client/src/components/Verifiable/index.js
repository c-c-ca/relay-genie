import React, { useState, useEffect } from 'react';
import './Verifiable.scss';
import Bars from '../ui/Bars';

const LoadingPage = () => (
  <div className="verifiable__bars">
    <Bars />
  </div>
);

const Verifiable = ({
  verifying,
  verified,
  success: Success,
  failure,
  response,
}) =>
  verifying ? <LoadingPage /> : verified ? <Success {...response} /> : failure;

const VerifiableContainer = ({
  verify = () => ({ error: false }),
  testResponse = ({ error }) => !error,
  ...props
}) => {
  const [verifying, setVerifying] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(async function () {
    setResponse(await verify());
    setVerifying(false);
  }, []);

  return (
    <Verifiable
      {...props}
      response={response}
      verifying={verifying}
      verified={response && testResponse(response)}
    />
  );
};

export default VerifiableContainer;
