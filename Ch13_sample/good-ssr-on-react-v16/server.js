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

// HTMLコンポーネント
function HTML({ now, children }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <title>간단한 서버 사이드 렌더링</title>
      </head>
      <body>
        {/* 렌더링 대상 요소 */}
        {/*
          React 15
          <div id="root" dangerouslySetInnerHTML={{ __html: contents }}></div>
        */}
        {/* React 16 */}
        <div id="root">{children}</div>

        {/* <추가> 데이터 수신 전용 <script> 태그 */}
        <script
          type="text/plain"
          id="server-now"
          data-server-now={now.getTime() + ''}
        ></script>

        {/* 웹팩이 출력한 파일 */}
        <script src="client.bundle.js"></script>
      </body>
    </html>
  );
}

// GET /
// 서버 사이드 렌더링 결과 응답
app.get('/', (req, res) => {
  // // Date 인스턴스 생성
  const now = new Date();

  // React 15
  // const contentsHTML = ReactDOMServer.renderToString(
  //   <App renderedAt={now} />
  // );
  // const fullHTML = ReactDOMServer.renderToStaticMarkup(
  //   <HTML contents={contentsHTML} now={now} />
  // );
  
  // React 16
  // Node.js의 Stream 출력
  const stream = ReactDOMServer.renderToNodeStream(
    <HTML now={now}>
      <App renderedAt={now} />
    </HTML>
  );

  // 클라이언트에 응답
  // React 15
  // res.send(fullHTML);
  // React 16
  stream.pipe(res);
});

// 3000번 포트에서 웹 서버 실행
app.listen(3000, () => {
  console.log('포트 3000번에서 실행...');
});