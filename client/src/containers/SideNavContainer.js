import React from 'react';
// import { useSelectSettingsView, useToggleSidenav, useNavigation } from '../hooks';
import {
  useSelectSettingsView,
  useToggleSidenav,
  useNavigation,
} from '../hooks';
import SideNav from '../components/SideBar';

// import {
//   AboutIcon,
//   HomeIcon,
//   SignOnIcon,
//   CogIcon,
// } from '../components/ui/icons';

// const mainMenuItems = {
//   signin: {
//     text: 'Sign In',
//     path: '/login',
//     icon: SignOnIcon,
//   },
//   home: {
//     text: 'Home',
//     path: '/',
//     icon: HomeIcon,
//   },
//   settings: {
//     text: 'Settings',
//     path: '/settings',
//     icon: CogIcon,
//   },
//   about: {
//     text: 'About Us',
//     path: '/about',
//     icon: AboutIcon,
//   },
// };

// const settingsMenuItems = ['account', 'password', 'events', 'notifications'];

const SideNavContainer = () => {
  const [sidenavVisible, toggleSidenavVisibility] = useToggleSidenav();
  const navItems = useNavigation();

  //   const [, selectSettingsView] = useSelectSettingsView();
  //   mainMenuItems.settings.submenu = settingsMenuItems.map(text => ({
  //     text,
  //     onClick: () => {
  //       selectSettingsView(text);
  //       toggleSidenavVisibility();
  //     },
  //   }));

  return (
    <SideNav
      show={sidenavVisible}
      onDismiss={toggleSidenavVisibility}
      // menuItems={mainMenuItems}
      menuItems={navItems}
    />
  );
};

export default SideNavContainer;
