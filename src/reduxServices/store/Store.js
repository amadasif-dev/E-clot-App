import {configureStore} from '@reduxjs/toolkit';
import RootReducers from '../rootReducer/RootReducers';

const Store = configureStore({
  reducer: RootReducers,
});
export default Store;
