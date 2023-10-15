import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Report } from 'notiflix/build/notiflix-report-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    Report.warning('You enter invalid Input. Try again.');
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    return data;
  } catch (error) {
    Report.warning('You enter invalid Input. Try again.');
  }
});
