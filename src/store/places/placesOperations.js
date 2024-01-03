import axios from '../../api/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllPlaces = createAsyncThunk(
  'places/getAllPlaces',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/places');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
export const getPlaceById = createAsyncThunk(
  'places/getPlaceById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/places/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
export const createPlace = createAsyncThunk(
  'places/createPlaces',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/places', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
export const updatePlaces = createAsyncThunk(
  'places/updatePlaces',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/places/${user._id}`, user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
export const deletePlaces = createAsyncThunk(
  'places/deletePlaces',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/places/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);