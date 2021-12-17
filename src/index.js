import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserAuthContextProvider from './contexts/AuthContext';
ReactDOM.render(
  <UserAuthContextProvider>
  <App />
  </UserAuthContextProvider>
  ,
  document.getElementById('root')
);

