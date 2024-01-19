import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = new URL('https://65a7972894c2c5762da70a47.mockapi.io/api/adverts');

url.searchParams.append('page', 1);
url.searchParams.append('limit', 12);

axios.defaults.baseURL = url.toString();
export const fetchCars = createAsyncThunk(
  'advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(``);
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
