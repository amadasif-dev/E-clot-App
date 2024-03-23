import {LIGHT_THEME_SELECTE} from '../Constants/ActionConstants';

export function ChangeThemeAction(lightTheme) {
  return {
    type: LIGHT_THEME_SELECTE,
    payLoad: lightTheme,
  };
}
