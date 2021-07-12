import React from 'react';
import './SuccessCard.scss';
import AlertCard from '../AlertCard';

import { CheckIcon } from '../../ui/icons';

const SuccessCard = props => (
  <AlertCard {...props}>
    <div className="alert-card__icon-wrapper alert-card__icon-wrapper--check-shadow">
      <CheckIcon />
    </div>
    <div className="alert-card__icon-wrapper alert-card__icon-wrapper--check">
      <CheckIcon />
    </div>
  </AlertCard>
);

export default SuccessCard;
