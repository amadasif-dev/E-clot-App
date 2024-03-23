// reducers/themeReducer.js
import {LIGHT_THEME_SELECTE} from '../Constants/ActionConstants';

const initialState = {
  theme: 'dark',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT_THEME_SELECTE:
      console.log(action.payload)
      return {
        ...state,
        // theme: state.theme === 'dark' ? 'light' : 'dark',
        theme:action.payload
      };
    default:
      return state;
  }
};

export default themeReducer;
