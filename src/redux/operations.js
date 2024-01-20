import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://65a7972894c2c5762da70a47.mockapi.io/api/adverts';

export const fetchCars = createAsyncThunk(
  'advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { page } = thunkAPI.getState().adverts;
      const urlPagination = `${baseUrl}?page=${page}&limit=12`;
      const response = await axios.get(urlPagination);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllCars = createAsyncThunk(
  'advert/allCars',
  async (_, thunkAPI) => {
    try {
      const urlNotPagination = `${baseUrl}`;
      const response = await axios.get(urlNotPagination);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const favoriteCars = createAsyncThunk(
  'advert/favoriteCars',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
