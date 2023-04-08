import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import HelloAgain from './components/HelloAgain';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = {
  name: "Akmal",
  age: "21 Tahun",
  status: "Active"
};

root.render(
  <React.StrictMode>
    <Hello user={user} />
    <HelloAgain />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
