// renderToString.js
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// 리액트 요소를 HTML 문자열로 변환
const html = ReactDOMServer.renderToString(
  <h1>Hello, SSR!</h1>
);

console.log(html);
