import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'; // 추가
import createBrowserHistory from 'history/createBrowserHistory'; // 추가
import App from './App';
import createStore from './createStore'; // 추가

// history 인스턴스 생성
const history = createBrowserHistory();

// 스토어 생성
const store = createStore(history);
ReactDOM.render(
  <Provider store={store}>
    {/*
      Link 컴포넌트 등이 동작할 수 있게
      react-router-dom의 Router가 아니라
      react-router-redux의 ConnectedRouter 사용
    */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);