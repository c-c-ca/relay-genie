import React from 'react';
import './FormButton.scss';
import Loader from '../Loader';

const FormButton = ({ text, submitting, valid, modifiedSinceLastSubmit }) => {
  const enabled = valid || modifiedSinceLastSubmit;
  return (
    <button
      className={`form-button ${enabled || 'form-button--disabled'} ${
        submitting && 'form-button--submitting'
      }`}
      disabled={!enabled}
    >
      <div className={submitting ? 'hidden' : undefined}>{text}</div>
      <div className="loader-wrapper">
        {submitting && <Loader color="white" />}
      </div>
    </button>
  );
};

export default FormButton;
