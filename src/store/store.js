import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice';
import usersReducer from './usersSlice';
import authReducer from './authSlice';
import contactsReducer from './contactsSlice';
import citiesReducer from './citiesSlice';
import statesReducer from './statesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    users: usersReducer,
    auth: authReducer,
    contacts: contactsReducer,
    cities: citiesReducer,
    states: statesReducer,
  },
});

export default store;
