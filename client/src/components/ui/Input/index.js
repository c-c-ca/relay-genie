import React from 'react';
import './Input.scss';

import {
  UserIcon,
  EmailIcon,
  KeyIcon,
  LockOpenIcon,
  CheckIcon,
  CrossIcon,
  AddressCardIcon,
  PhoneIcon,
} from '../../ui/icons';
import Loader from '../../ui/Loader';

const ICON_COLOR = 'hsl(20, 89%, 50%)';

const icons = {
  username: UserIcon,
  email: EmailIcon,
  password: KeyIcon,
  confirm: LockOpenIcon,
  phone: PhoneIcon,
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
  meta.validating && meta.active ? <Loader /> : renderValid(meta);

const renderInput = (placeholder, disabled, input, { pristine }) => {
  const { name } = input;
  return (
    <input
      {...input}
      className={`input ${disabled ? 'input--disabled' : undefined} ${
        pristine && 'input--pristine'
      } ${icons[name] || 'input--no-icon'} `}
      id={placeholder}
      placeholder={placeholder}
      disabled={disabled}
      type={input.type}
      autoComplete="off"
    />
  );
};
const Input = ({ placeholder, label, disabled, input, meta, description }) => {
  const { name } = input;
  const Icon = icons[name];

  return (
    <div className="field-wrapper">
      <div className="input__header">
        <label className="input__label" htmlFor={placeholder}>
          {label || placeholder}
        </label>
        <div className="input__description">{description}</div>
      </div>
      <div className="input__wrapper">
        <div>
          {Icon ? (
            <div className="icon-wrapper--left">
              <Icon fill={ICON_COLOR} />
            </div>
          ) : null}
          <div className="icon-wrapper--right">{renderStatus(meta)}</div>
          {renderInput(placeholder, disabled, input, meta)}
        </div>
      </div>
      {renderError(meta)}
    </div>
  );
};
export default Input;
