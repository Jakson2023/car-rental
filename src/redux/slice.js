import { fetchCars } from './operations.js';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'adverts',
  initialState: {
    favorits: [],
    adverts: {},
    error: null,
    page: 1
  },
  reducers: {
    nextPage: (state) => {
      state.page += 1;
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
      
      ;
  },
});
export const { nextPage } = slice.actions;
export default slice.reducer;
