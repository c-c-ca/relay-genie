import React from 'react';
import Verifiable from '../Verifiable';
import MessageLayout from '../layout/MessageLayout';
import { AlertCircle } from '../ui/icons';
import FailureForm from './FailureForm';

const FailureMessage = () => (
  <MessageLayout
    title="Uh oh! Something went wrong."
    message="There appears to be something wrong with the link. You can generate a new link by registering again."
    icon={() => (
      <div className="u-icon-red">
        <AlertCircle />
      </div>
    )}
    form={<FailureForm />}
  />
);

const VerifiableMessage = props => (
  <Verifiable {...props} failure={<FailureMessage />} />
);

export default VerifiableMessage;
