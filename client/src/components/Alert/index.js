import React from 'react';
import PortalModal from '../layout/PortalModal';
import FailureCard from '../ui/FailureCard';

const Warning = ({ onDismiss, ...props }) => (
  <PortalModal onDismiss={onDismiss}>
    <FailureCard {...props} onDismiss={onDismiss} />
  </PortalModal>
);

export default Warning;
