// server.js
import path from 'path';
// 리액트 관련 패키지 임포트
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// 익스프레스 임포트
import express from 'express';
// App 컴포넌트 임포트
import App from './App';

const app = express();

// GET /client.bundle.js
// client.bundle.js 내용을 그대로 응답
app.get('/client.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'client.bundle.js'));
});

// HTML 컴포넌트
function HTML({ contents, now }) { // <추가> props.now
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <title>간단한 서버 사이드 렌더링</title>
      </head>
      <body>
        {/* 렌더링 대상 요소 */}
        <div id="root" dangerouslySetInnerHTML={{ __html: contents }}></div>

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
  // Date 인스턴스 생성
  const now = new Date();
  // App 컴포넌트를 HTML 문자열로 출력
  const contentsHTML = ReactDOMServer.renderToString(
    <App renderedAt={now} />
  );

  const fullHTML = ReactDOMServer.renderToStaticMarkup(
    // <추가> now를 props로 전달
    <HTML contents={contentsHTML} now={now} />
  );

  // 클라이언트에 응답
  res.send(fullHTML);
});

// 3000번 포트에서 웹 서버 실행
app.listen(3000, () => {
  console.log('포트 3000번에서 실행...');
});