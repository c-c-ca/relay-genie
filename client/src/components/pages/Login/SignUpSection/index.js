import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpSection.scss';

const SignUpSection = ({ resetPassword, setResetPassword }) => (
  <div className="signup-section">
    {resetPassword ? (
      <>
        <Link className="signup-section__link" to="/register">
          Sign Up
        </Link>
        Or
        <Link
          className="signup-section__link"
          to="/login"
          onClick={() => setResetPassword(false)}
        >
          Log In
        </Link>
      </>
    ) : (
      <>
        New to RelayHero?
        <Link className="signup-section__link" to="/register">
          Sign Up
        </Link>
      </>
    )}
  </div>
);

export default SignUpSection;
