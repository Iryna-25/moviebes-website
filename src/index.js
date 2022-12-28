import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import GlobalStyle from './GlobalStyle.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/moviebes-website'>
      <GlobalStyle/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
