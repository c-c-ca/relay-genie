import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = ({
  text,
  icon,
  to,
  disabled = false,
  color = 'primary',
  onClick = () => {},
}) => (
  <Link
    to={to}
    component={React.forwardRef((props, ref) => (
      <a
        ref={ref}
        disabled={disabled}
        {...props}
        className={`button button--${disabled ? 'disabled' : color}`}
        onClick={onClick}
      >
        <div className="button__content">
          {icon ? (
            <div className={`button__icon button__icon--${color}`}>{icon}</div>
          ) : null}

          <div className="button__text">{text}</div>
        </div>
      </a>
    ))}
  />
);

export default Button;
