import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Person from './components/Person';
import Man from './components/Man';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />

    <Person name="Bhargov" age="25"/>
    <Person name="Das" age="26"/>

    <Man number="1"/>
    <Man number="2"/>
    <Man number="3"/>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
