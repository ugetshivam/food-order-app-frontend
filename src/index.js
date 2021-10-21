import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartContextProvider } from './contexts/CartContext';
import {BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
  <CartContextProvider>
  <Router>
    <App />
  </Router>
  </CartContextProvider>,
  document.getElementById('root')
);