import React from 'react';
import './HoverFormLayout.scss';

const HoverFormLayout = ({ title, children, color = 'primary' }) => (
  <div className="hover-form-layout__container">
    {title ? (
      <div
        className={`hover-form-layout__title hover-form-layout__title--${color}`}
      >
        {title}
      </div>
    ) : null}
    <div className="hover-form-layout__wrapper">{children}</div>
  </div>
);

export default HoverFormLayout;
