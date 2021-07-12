import { SET_SETTINGS_VIEW } from './actionTypes';

export const setSettingsView = view => ({
  type: SET_SETTINGS_VIEW,
  payload: view,
});
