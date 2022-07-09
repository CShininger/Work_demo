import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

store.subscribe(()=>{
  root.render(

    <BrowserRouter>
    <App />
    </BrowserRouter>

);
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



  root.render(

    <BrowserRouter>
    <App />
    </BrowserRouter>

);



