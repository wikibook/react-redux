// server.js
import path from 'path';
// React関連のパッケージをimport
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// expressをimport
import express from 'express';
// Appコンポーネントをimport
import App from './App';

const app = express();

// GET /client.bundle.js
// client.bundle.js 내용을 그대로 응답
app.get('/client.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'client.bundle.js'));
});

// GET /
// 서버 사이드 렌더링 결과 응답
app.get('/', (req, res) => {
  const now = new Date();
  const state = JSON.stringify({ now });
  const stream = ReactDOMServer.renderToNodeStream(
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <title>간단한 서버 사이드 렌더링</title>
      </head>
      <body>
        {/* 렌더링 대상 요소 */}
        <div id="root">
          <App renderedAt={now} />
        </div>

        {/* 데이터 전달 */}
        <script id="initial-state" data-json={state}></script>

        {/* 웹팩이 출력한 파일 */}
        <script src="client.bundle.js"></script>
      </body>
    </html>
  );

  stream.pipe(res);
});

// 3000번 포트에서 웹 서버 실행
app.listen(3000, () => {
  console.log('포트 3000번에서 실행...');
});