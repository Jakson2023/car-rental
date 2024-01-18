import { fetchCars } from './operations.js';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'adverts',
  initialState: {
    favorits: [],
    adverts: {},
    error: null,
  },
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {})
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.error = null;
        state.adverts = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
