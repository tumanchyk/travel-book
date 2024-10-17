import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import axios from '../../api/baseURL';

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
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/places', data)
      toast.success('New place added to your list')
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
export const updatePlaces = createAsyncThunk(
  'places/updatePlaces',
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(`/places/${data.id}`, data.formData);
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