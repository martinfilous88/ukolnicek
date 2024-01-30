import React from 'react';
import ReactDOM from 'react-dom/client';
import Ukolnincek from './Ukolnicek';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<h1>Ukolníček</h1>}
    <Ukolnincek/>
  </React.StrictMode>
);
