import React from 'react';
import './MessageLayout.scss';

const MessageLayout = ({ title, message, icon: Icon, form }) => (
  <div className="message-layout">
    <div className="message-layout__top">
      <div className="message-layout__header">
        <div className="message-layout__header-icon">
          <Icon />
        </div>
        <h1 className="message-layout__header-title">{title}</h1>
        <p className="message-layout__header-message">{message}</p>
      </div>
      <div className="message-layout__form-wrapper">{form}</div>
    </div>
    <div className="message-layout__bottom"></div>
  </div>
);

export default MessageLayout;
