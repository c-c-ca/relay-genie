import React from 'react';
import './SocialButton.scss';
import {
  GoogleButtonIcon,
  GithubButtonIcon,
  FacebookButtonIcon,
  TwitterButtonIcon,
} from '../../../ui/icons';

const SocialButton = ({ text, to, disabled, icon, social }) => (
  <a
    className={`social-button social-button--${social} ${
      disabled ? 'social-button--disabled' : undefined
    }`}
    href={to}
    onClick={e => {
      if (disabled) e.preventDefault();
    }}
  >
    <div className={`social-button__icon social-button__icon--${social}`}>
      {icon}
    </div>

    <p className="social-button__text">{text}</p>
  </a>
);

export const FacebookButton = props => (
  <SocialButton {...props} social="facebook" icon={<FacebookButtonIcon />} />
);

export const GithubButton = props => (
  <SocialButton {...props} social="github" icon={<GithubButtonIcon />} />
);

export const GoogleButton = props => (
  <SocialButton {...props} social="google" icon={<GoogleButtonIcon />} />
);

export const TwitterButton = props => (
  <SocialButton {...props} social="twitter" icon={<TwitterButtonIcon />} />
);
