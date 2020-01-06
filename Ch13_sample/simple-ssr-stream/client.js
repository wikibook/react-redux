import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let now = new Date();
if (document.query)

const now = new Date();

ReactDOM.hydrate(
  <App renderedAt={now} />,
  document.getElementById('root')
);
