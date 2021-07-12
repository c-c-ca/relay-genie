import React from 'react';
import './FailureCard.scss';
import AlertCard from '../AlertCard';

import { AlertCircle } from '../../ui/icons';

const SuccessCard = ({ errorTitle, errorMessage, ...props }) => (
  <AlertCard title={errorTitle} message={errorMessage} {...props}>
    <div className="alert-card__icon-wrapper alert-card__icon-wrapper--alert-circle">
      <AlertCircle />
    </div>
  </AlertCard>
);

export default SuccessCard;
