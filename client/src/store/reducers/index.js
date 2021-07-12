import { combineReducers } from 'redux';
import { sidenavReducer } from './sidenavReducer';
import { settingsReducer } from './settingsReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  showSideNav: sidenavReducer,
  settingsView: settingsReducer,
  auth: authReducer,
});
