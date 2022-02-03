import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { FacilityProvider } from './Context/appContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <FacilityProvider>
      <App />
    </FacilityProvider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
