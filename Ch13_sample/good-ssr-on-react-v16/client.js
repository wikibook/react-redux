// client.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 서버로부터의 데이터
const serverNowString = 
  document.getElementById('server-now').getAttribute('data-server-now');
// 서버의 Date 인스턴스 복원
const now = new Date(
  //문자열을 숫자로 변환
  parseInt(serverNowString, 10)
);

// React 15 이전
// ReactDOM.render(
// React 16 이후
ReactDOM.hydrate(
  <App renderedAt={now} />,
  document.getElementById('root')
);