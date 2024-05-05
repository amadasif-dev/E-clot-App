import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '../reducer/ChangeThemeReducer';
import wishListItemReducer from '../reducer/WishListItemReducer';

export default combineReducers({
  themeReducer: themeReducer,
  wishListItemReducer: wishListItemReducer,
});
