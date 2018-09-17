import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from './App';


ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>
  , document.getElementById('root'));

