import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types';

const url = 'http://localhost:3000/api/v1/cars';

export const fetchAllCars = createAsyncThunk(
  types.FETCH_CARS,
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

const initialState = {
  cars: [],
  error: null,
  status: 'idle',
};

// Slice
const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    cars(state, action) {
      state.cars = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { cars } = carsSlice.actions;
export default carsSlice.reducer;
