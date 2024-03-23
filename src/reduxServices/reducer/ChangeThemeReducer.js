// reducers/themeReducer.js
import {LIGHT_THEME_SELECTE} from '../Constants/ActionConstants';

const initialState = {
  theme: 'dark',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT_THEME_SELECTE:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
};

export default themeReducer;
