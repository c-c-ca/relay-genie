import { SET_SETTINGS_VIEW } from '../actions/actionTypes';

export const settingsReducer = (state = 'account', action) => {
  switch (action.type) {
    case SET_SETTINGS_VIEW:
      return action.payload;
    default:
      return state;
  }
};
