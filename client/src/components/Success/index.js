import React from 'react';
import PortalModal from '../layout/PortalModal';
import SuccessCard from '../ui/SuccessCard';

const Success = ({ onDismiss, ...props }) => (
  <PortalModal onDismiss={onDismiss}>
    <SuccessCard {...props} onDismiss={onDismiss} />
  </PortalModal>
);

export default Success;
