import React from 'react';
import './CollapseButton.scss';
import { CheveronDownIcon } from '../../ui/icons';

const CollapseButton = ({ isOpen, ...props }) => (
  <button
    className={`collapse-button collapse-button--${
      isOpen ? 'active' : 'inactive'
    }`}
    {...props}
  >
    {<CheveronDownIcon />}
  </button>
);

export default CollapseButton;
