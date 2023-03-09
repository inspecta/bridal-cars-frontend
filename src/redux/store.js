import { configureStore, combineReducers } from '@reduxjs/toolkit';
import carsReducer from './features/carSlice';
import userReducer from './features/user';
import alertReducer from './features/alert';
import reservationReducer from './features/reservationSlice';

const rootReducer = combineReducers({
  cars: carsReducer,
  user: userReducer,
  alert: alertReducer,
  reservations: reservationReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
