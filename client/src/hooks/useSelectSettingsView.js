import { useDispatch, useSelector } from 'react-redux';
import { setSettingsView } from '../store/actions';

export const useSelectSettingsView = () => {
  const settingsView = useSelector(({ settingsView }) => settingsView);
  const dispatch = useDispatch();
  const selectSettingsView = view => dispatch(setSettingsView(view));

  return [settingsView, selectSettingsView];
};
