import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
  const response = await axios.get('http://localhost:3004/cities'); 
  return response.data;
});

const citiesSlice = createSlice({
  name: 'cities',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectCities = (state) => state.cities;
export default citiesSlice.reducer;
