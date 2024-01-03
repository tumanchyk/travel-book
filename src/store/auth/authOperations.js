import axios from '../../api/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/register', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/login', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/logout');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
   'auth/refresh',
    async(_, thunkAPI) => {
      const {token} = thunkAPI.getState().auth;
      if (!token) {
          return thunkAPI.rejectWithValue('No valid token')
        }

      try{
        const currentUser = await axios.get('/current');
        return currentUser.data
      } catch (error){
        return thunkAPI.rejectWithValue(error.message)
      }
    } 
)