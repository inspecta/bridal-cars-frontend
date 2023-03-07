import { configureStore, combineReducers } from '@reduxjs/toolkit';
import carsReducer from './features/carSlice';
import userReducer from './features/user';
import alertReducer from './features/alert';

const rootReducer = combineReducers({
  cars: carsReducer,
  user: userReducer,
  alert: alertReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
