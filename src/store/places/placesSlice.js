import { createSlice } from '@reduxjs/toolkit';

import { getAllPlaces, getPlaceById } from './placesOperations';

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    list: [],
    selectedPlace: {_id: null, country: "", places: "", date: "", overview: "", isVisited: false},
    type: "all"
  },
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(getAllPlaces.fulfilled, (state, actions) => {
      state.list = actions.payload;
    });
    builder.addCase(getPlaceById.fulfilled, (state, actions) => {
      state.selectedPlace = actions.payload;
    });
  }
});

export const { changeType } = placesSlice.actions;

export const placesReducer =  placesSlice.reducer;