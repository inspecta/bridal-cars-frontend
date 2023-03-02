import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './features/carSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
