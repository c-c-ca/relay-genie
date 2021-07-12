import React from 'react';
import './PortalModal.scss';
import { createPortal } from 'react-dom';
import Modal from '../Modal';

const PortalModal = ({ children, ...props }) =>
  createPortal(
    <Modal {...props} show>
      <div className="portal-modal__content">{children}</div>
    </Modal>,
    document.querySelector('#modal')
  );

export default PortalModal;
