import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './store/firebaseContext';
import {Context} from './store/firebaseContext'
import { db,app,storage } from './firebase/config';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{db,app,storage}}>
      <Context>
         <App />
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals