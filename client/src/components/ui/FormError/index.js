import React from 'react';
import './FormError.scss';

const FormError = ({ errorMessage }) => (
  <div className="submit-error">{errorMessage}</div>
);

export default FormError;
