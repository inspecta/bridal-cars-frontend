import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types';

const url = 'http://localhost:3000/api/v1/reservations';
export const reserveCar = createAsyncThunk(types.RESERVE_CAR, async (car) => {
  const response = await axios.post(url, car);
  if (response.status === 200 && response.statusText === 'OK') {
    console.log(response.data);
    return response.data;
  }
  return null;
});

export const fetchAllReservations = createAsyncThunk(types.FETCH_RESERVATIONS, async () => {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
});

const initialState = {
  reservations: [],
  error: null,
  status: 'idle',
};

// Slice
const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    reservations(state, action) {
      state.reservations = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(fetchAllReservations.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { reservations } = reservationSlice.actions;
export default reservationSlice.reducer;
