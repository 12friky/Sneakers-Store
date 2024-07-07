/* eslint-disable no-unused-vars */
// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import AppRoutes from './Components/Routes'; // Corrected import name

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes /> 
      </Router>
    </Provider>
  );
}

export default App;
