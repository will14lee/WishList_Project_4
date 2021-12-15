import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

render(
  <App/>
  // <BrowserRouter>
  // <Routes>
    // <Route path="/" element={<App/>} />
  // </Routes>
  //  </BrowserRouter>
  ,
  document.getElementById('root')
);
