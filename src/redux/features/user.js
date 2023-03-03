import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types';

const baseApi = 'http://127.0.0.1:3000';

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

const userReducer = (state = [], action) => {
  switch (action.type) {
    case `${types.SET_FETCHED_USER}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
