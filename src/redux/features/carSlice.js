import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types';

const url = 'https://bridal-cars.onrender.com/api/v1/cars';

export const fetchAllCars = createAsyncThunk(types.FETCH_CARS, async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addCar = createAsyncThunk(types.ADD_CAR, async (newCar) => {
  const response = await axios.post(url, newCar);
  if (response.status === 200 && response.statusText === 'OK') {
    return response.data;
  }
  return null;
});

export const deleteCar = createAsyncThunk(types.DELETE_CAR, async (carId) => {
  const response = await axios.delete(`${url}/${carId}`);
  return response.data;
});

export const updateCar = createAsyncThunk(types.UPDATE_CAR, async ({ id, reserved }) => {
  const car = { reserved: !reserved };
  const response = await axios.put(`${url}/${id}`, car);
  const resp = await response.data;
  return resp.data;
});

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
