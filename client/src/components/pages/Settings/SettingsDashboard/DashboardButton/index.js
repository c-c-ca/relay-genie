import React from 'react';
import './DashboardButton.scss';
import Dots from '../../../../ui/Dots';

const DashboardButton = ({ icon: Icon, text, submitting }) => (
  <button
    className={`dashboard-button ${
      submitting && `dashboard-button--submitting`
    }`}
  >
    <div
      className={`dashboard-button__dots ${
        submitting && 'dashboard-button__dots--submitting'
      } `}
    >
      <Dots />
    </div>
    <div
      className={`dashboard-button__content ${
        submitting && 'dashboard-button__content--submitting'
      } `}
    >
      <div className="dashboard-button__icon">{Icon && <Icon />}</div>
      <div className="dashboard-button__text">{text}</div>
    </div>
  </button>
);

export default DashboardButton;
