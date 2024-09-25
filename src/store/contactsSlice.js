import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get('http://localhost:3003/contacts');
  return response.data; 
});

const contactsSlice = createSlice({
  name: 'contacts', 
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectContacts = (state) => state.contacts;
export default contactsSlice.reducer;
