import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartContextProvider } from './contexts/CartContext';
import { LoginContextProvider } from './contexts/LoginContext';
import {BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
  <LoginContextProvider>
  <CartContextProvider>
  <Router>
    <App />
  </Router>
  </CartContextProvider>
  </LoginContextProvider>,
  document.getElementById('root')
);