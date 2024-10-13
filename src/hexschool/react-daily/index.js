
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactCraApp from './hexschool/react-cra/React-cra-App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ReactCraApp />
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
