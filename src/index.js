import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Blacklm from './components/views/helpers/blacklm';


ReactDOM.render(
  <React.StrictMode>
    <Blacklm />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept();
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
