import { TOGGLE_SIDENAV } from '../actions/actionTypes';

export const sidenavReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDENAV:
      console.log('toggle');
      return !state;
    default:
      return state;
  }
};
