import React from 'react';
import './Modal.scss';

const Modal = ({ show, onDismiss = () => {}, children }) => (
  <div onClick={onDismiss} className={`modal modal--${show ? 'show' : 'hide'}`}>
    <div onClick={e => e.stopPropagation()}>{children}</div>
  </div>
);

export default Modal;
