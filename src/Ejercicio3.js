import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login'; 
import PrivateScreen from './components/PrivateScreen'; //

export const Ejercicio3 = () => {
  const token = useSelector((state) => state.auth.token); 

  if (token) {
    return (
      <PrivateScreen>
        <h1>Welcome to the private screen!</h1>
      </PrivateScreen>
    );
  }

  return <Login />;
};

export default Ejercicio3;
