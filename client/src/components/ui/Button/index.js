import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const Button = ({ text, icon, to, color = 'primary', onClick = () => {} }) => (
  <Link
    to={to}
    component={React.forwardRef((props, ref) => (
      <a
        ref={ref}
        {...props}
        className={`button button--${color}`}
        onClick={onClick}
      >
        <div className="button__content">
          <div className={`button__icon button__icon--${color}`}>{icon}</div>
          <div className="button__text">{text}</div>
        </div>
      </a>
    ))}
  />
);

export default Button;
