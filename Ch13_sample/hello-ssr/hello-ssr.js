const React = require('react');
const { renderToString } = require('react-dom/server');

const html = renderToString(
  <h1>Hello, SSR!</h1>
);

console.log(html);
