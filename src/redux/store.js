import { configureStore, combineReducers } from '@reduxjs/toolkit';
import carsReducer from './features/carSlice';
import userReducer from './features/user';

const rootReducer = combineReducers({
  cars: carsReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
