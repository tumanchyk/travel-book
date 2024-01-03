import toast from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
    isRefreshing: false
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.isRefreshing = false;
    });
    builder.addCase(registerUser.rejected, (state, actions) => {
      state.isRefreshing = false;
      if (actions.payload === 409) {
        toast.error('User with this email is already exist') 
      }
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isRefreshing = true;
    });
   
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.token = actions.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      toast.error('This user is not registered')
    });
     builder.addCase(logoutUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.token = '';
      state.isLoggedIn = false;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
    });
    
  },
});

export const authReducer = authSlice.reducer;