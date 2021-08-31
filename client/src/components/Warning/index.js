import React from 'react';
import PortalModal from '../layout/PortalModal';
import FailureCard from '../ui/FailureCard';

const Alert = ({ onDismiss, ...props }) => (
  <PortalModal onDismiss={onDismiss}>
    <FailureCard {...props} onDismiss={onDismiss} />
  </PortalModal>
);

export default Alert;
