import React from 'react';
import './AlertCard.scss';
import { CrossIcon } from '../../ui/icons';

const AlertCard = ({ title, message, onDismiss, buttons, children }) => (
  <div className="alert-card">
    <div className="alert-card__header">
      <div
        onClick={onDismiss}
        className="alert-card__icon-wrapper alert-card__icon-wrapper--cross"
      >
        <CrossIcon />
      </div>
      {children}
    </div>
    <div className="alert-card__content">
      <h2 className="alert-card__title">{title}</h2>
      <p className="alert-card__message">{message}</p>
      <div className="alert-card__button-wrapper">{buttons}</div>
    </div>
  </div>
);

export default AlertCard;
