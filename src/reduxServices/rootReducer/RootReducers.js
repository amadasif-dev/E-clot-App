import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from '../reducer/ChangeThemeReducer';

export default combineReducers({
  themeReducer: themeReducer,
});
