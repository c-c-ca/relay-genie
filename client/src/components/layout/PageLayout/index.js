import React from 'react';
import NavBar from '../../NavBar';
import SideNavContainer from '../../../containers/SideNavContainer';
import Container from '../Container';

const PageLayout = ({ children }) => (
  <div>
    <NavBar />
    <SideNavContainer />
    {children}
  </div>
);

export default PageLayout;
