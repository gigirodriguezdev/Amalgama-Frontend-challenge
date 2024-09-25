import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStates = createAsyncThunk('states/fetchStates', async () => {
  const response = await axios.get('http://localhost:3005/states'); 
  return response.data;
});

const statesSlice = createSlice({
  name: 'states',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStates.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStates = (state) => state.states;
export default statesSlice.reducer;
