import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const now = new Date();

ReactDOM.render(
  <App renderedAt={now} />,
  document.getElementById('root')
);
