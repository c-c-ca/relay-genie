import { useAuth } from './useAuth';
import { useSelectSettingsView } from './useSelectSettingsView';
import { useToggleSidenav } from './useToggleSidenav';

import {
  SignOnIcon,
  HomeIcon,
  CogIcon,
  AboutIcon,
} from '../components/ui/icons';

export const useNavigation = () => {
  const [auth, { logOut }] = useAuth();
  const [, selectSettingsView] = useSelectSettingsView();
  const [, toggleSidenavVisibility] = useToggleSidenav();

  const settingsMenuItems = ['account', 'password', 'events', 'notifications'];

  const navItems = {
    default: [
      { text: 'home', path: '/', icon: HomeIcon },
      { text: 'about us', path: '/about', icon: AboutIcon },
    ],
    loggedOut: [{ text: 'sign in', path: '/login', icon: SignOnIcon }],
    loggedIn: [
      {
        text: 'settings',
        path: '/settings',
        icon: CogIcon,
        menu: settingsMenuItems.map(text => ({
          text,
          onClick: () => {
            selectSettingsView(text);
            toggleSidenavVisibility();
          },
        })),
      },
      {
        text: 'sign out',
        path: '/',
        icon: HomeIcon,
        onClick: logOut,
      },
    ],
  };

  const authNavItems = auth => {
    switch (auth) {
      case null:
        return [];
      case false:
        return navItems.loggedOut;
      default:
        return navItems.loggedIn;
    }
  };

  return [...navItems.default, ...authNavItems(auth)];
};
