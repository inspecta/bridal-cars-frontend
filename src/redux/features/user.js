import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types';

const baseApi = 'https://bridal-cars.onrender.com/';

export const fetchUser = createAsyncThunk(
  types.SET_FETCHED_USER,
  async (userData) => {
    const user = await axios.post(`${baseApi}/users/sign_in`, userData);
    const userDetails = {
      id: user.data.status.data.id,
      username: user.data.status.data.username,
      token: user.headers.authorization,
    };
    localStorage.setItem('user', JSON.stringify(userDetails));
    return userDetails;
  },
);

export const logoutUser = createAsyncThunk(
  types.LOGOUT_USER,
  async (userToken) => {
    const user = await axios.delete(`${baseApi}/users/sign_out`, {
      headers: {
        Authorization: `${userToken}`,
      },
    });
    return user.data;
  },
);

const userReducer = (state = [], action) => {
  switch (action.type) {
    case `${types.SET_FETCHED_USER}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
