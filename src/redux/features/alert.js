import { createAsyncThunk } from '@reduxjs/toolkit';
import types from '../types';

export const triggerAlert = createAsyncThunk(
  types.SET_ALERT,
  async (alertDetails) => ({
    status: true,
    heading: alertDetails.heading,
    message: alertDetails.message,
    variant: alertDetails.variant,
  }),
);

export const removeAlert = createAsyncThunk(types.REMOVE_ALERT, async () => ({
  status: false,
  heading: '',
  message: '',
  variant: '',
}));

const initialState = {
  status: false,
  heading: '',
  message: '',
  variant: '',
};

const alertReducer = (alert = initialState, action) => {
  switch (action.type) {
    case `${types.SET_ALERT}/fulfilled`:
      return action.payload;
    case `${types.REMOVE_ALERT}/fulfilled`:
      return action.payload;
    default:
      return alert;
  }
};

export default alertReducer;
