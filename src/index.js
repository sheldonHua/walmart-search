import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from './App';


ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>
  , document.getElementById('root'));

