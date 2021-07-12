import React from 'react';
import './NavBar.scss';
import Container from '../layout/Container';
import Logo from '../ui/Logo';
import NavMenu from './NavMenu';
// import NavButtonContainer from '../../containers/NavButtonContainer';
import MenuButtonContainer from '../../containers/MenuButtonContainer';

const NavBar = () => (
  <div className="navbar">
    <Container>
      <div className="navbar__desktop-display">
        <Logo />
        <NavMenu />
      </div>
      <div className="navbar__mobile-display">
        <MenuButtonContainer />
      </div>
    </Container>
  </div>
);

export default NavBar;
