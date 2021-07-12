import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';
import LogoImage from './LogoImage';
import LogoText from './LogoText';

const Logo = () => (
  <Link className="logo" to="/">
    <LogoImage />
    <LogoText />
  </Link>
);

export default Logo;
