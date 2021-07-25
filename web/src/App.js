import { render } from '@testing-library/react';
import React from 'react';
import Routes from './routes';
import { AuthProvider } from './auth/AuthContext';

const App = () =>{
  render()
    return(
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    );
  }


export default App;
