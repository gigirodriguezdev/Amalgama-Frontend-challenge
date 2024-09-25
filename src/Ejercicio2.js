import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from './store/bookSlice';
import { fetchUsers } from './store/usersSlice'; 
import BookList from './components/BookList'; 
import UserList from './components/UserList'; 


export const Ejercicio2 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Libros</h1>
      <BookList />
      <h1>Usuarios</h1>
      <UserList />
    </div>
  );
  
};


