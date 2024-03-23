import {LIGHT_THEME_SELECTE} from '../Constants/ActionConstants';

export function ChangeThemeAction(theme) {
  return {
    type: LIGHT_THEME_SELECTE,
    payload: theme,
  };
}
