import { fetchAllCars, fetchCars } from './operations.js';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'adverts',
  initialState: {
    favorites: [],
    adverts: [],
    error: null,
    page: 1,
    alladverts: [],
  },
  reducers: {
    nextPage: state => {
      state.page += 1;
    },
    resetPage: state => {
      state.page = 1;
    },
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {})
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.error = null;
        state.adverts = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.error = null;
        state.alladverts = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export const { nextPage, addToFavorites, removeFromFavorites, resetPage } =
  slice.actions;
export default slice.reducer;
