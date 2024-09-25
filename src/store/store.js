import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice';
import usersReducer from './usersSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    users: usersReducer,
    auth: authReducer,
  },
});

export default store;
