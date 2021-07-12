import React from 'react';
import './ThirdPartyButtonGroup.scss';
import {
  FacebookButton,
  GithubButton,
  GoogleButton,
  TwitterButton,
} from '../ui/social/buttons';

const ThirdPartyButtonGroup = ({ text }) => (
  <div className="third-party-button-group">
    <h3 className="third-party-button-group__header">{`Or ${text}`}</h3>
    <div className="third-party-button-group__container">
      <FacebookButton text={`${text} Facebook`} to="/auth/facebook" />
      <GithubButton text={`${text} GitHub`} to="/auth/github" />
      <GoogleButton text={`${text} Google`} to="/auth/google" />
      <TwitterButton text={`${text} Twitter`} to="/auth/twitter" />
    </div>
  </div>
);

export default ThirdPartyButtonGroup;
