import React from 'react';
import './Input.scss';

import {
  UserIcon,
  EmailIcon,
  KeyIcon,
  LockOpenIcon,
  CheckIcon,
  CrossIcon,
} from '../../ui/icons';
// import Loader from '../Spinner/Loader/Loader';

const ICON_COLOR = 'hsl(20, 89%, 50%)';

const renderIcon = name => {
  switch (name) {
    case 'username':
      return <UserIcon fill={ICON_COLOR} />;
    case 'email':
      return <EmailIcon fill={ICON_COLOR} />;
    case 'password':
      return <KeyIcon fill={ICON_COLOR} />;
    case 'confirm':
      return <LockOpenIcon fill={ICON_COLOR} />;
    default:
      return null;
  }
};

const renderValid = ({
  submitFailed,
  touched,
  modifiedSinceLastSubmit,
  error,
  active,
}) => {
  if (((!submitFailed && touched) || modifiedSinceLastSubmit) && !active) {
    return error ? (
      <div className="u-icon-red">
        <CrossIcon />
      </div>
    ) : (
      <div className="u-icon-green">
        <CheckIcon />
      </div>
    );
  }
};

const renderError = ({
  touched,
  error,
  submitFailed,
  modifiedSinceLastSubmit,
  active,
}) =>
  error &&
  touched &&
  !active &&
  (!submitFailed || modifiedSinceLastSubmit) && (
    <div className="error">{error}</div>
  );

const renderStatus = meta =>
  // meta.validating && meta.active ? <Loader /> : renderValid(meta);
  meta.validating && meta.active ? <div /> : renderValid(meta);

const renderInput = (placeholder, disabled, input, { pristine }) => (
  <input
    className={`input ${disabled ? 'input--disabled' : undefined} ${
      pristine && 'input--pristine'
    }`}
    id={placeholder}
    {...input}
    placeholder={placeholder}
    disabled={disabled}
    type={input.type}
    autoComplete="off"
  />
);

const Input = ({ placeholder, label, disabled, input, meta, touched }) => (
  <div className="field-wrapper">
    <label className="label" htmlFor={placeholder}>
      {label || placeholder}
    </label>
    <div className="input-wrapper">
      <div>
        <div className="icon-wrapper--left">{renderIcon(input.name)}</div>
        <div className="icon-wrapper--right">{renderStatus(meta)}</div>
        {renderInput(placeholder, disabled, input, meta)}
      </div>
    </div>
    {renderError(meta)}
  </div>
);

export default Input;
