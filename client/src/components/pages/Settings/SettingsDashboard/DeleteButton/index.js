import React from 'react';
import './DeleteButton.scss';
import Dots from '../../../../ui/Dots';

const DeleteButton = ({ text, submitting, ...props }) => (
  <button
    {...props}
    className={`delete-button ${submitting && `delete-button--submitting`}`}
  >
    <div
      className={`delete-button__content ${
        submitting && 'delete-button__content--submitting'
      } `}
    >
      {/* <div className="delete-button__icon">{Icon && <Icon />}</div> */}
      <div className="delete-button__text">{text}</div>
    </div>
  </button>
);

export default DeleteButton;
