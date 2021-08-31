import React from 'react';
import './ConnectButton.scss';

const ConnectButton = ({ icon: Icon, text, disabled, to }) => (
  <a
    href={to}
    className={`connect-button ${disabled && 'connect-button--disabled'}`}
    disabled={disabled}
  >
    <div className="connect-button__content">
      <div className="connect-button__icon">{Icon && <Icon />}</div>
      <div className="connect-button__text">{text}</div>
    </div>
  </a>
);

export default ConnectButton;
