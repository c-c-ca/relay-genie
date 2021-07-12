import React from 'react';
import './FormLayout.scss';

// import Loader from '../../Loader/Loader';

const FormLayout = ({
  children,
  title,
  footer,
  classList = [],
  loading = false,
}) => (
  <div className={`form ${classList.join(' ')}`}>
    {/* {loading ? null : ( //       <Loader /> */}
    <div className="form__body">
      <div className="form__wrapper">
        <h1 className="form__header">{title}</h1>
        <div className="form__content">{children}</div>
      </div>
      {footer || null}
    </div>
    {/* )} */}
  </div>
);

export default FormLayout;
