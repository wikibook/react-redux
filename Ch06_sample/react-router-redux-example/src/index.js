import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import TodoApp from './containers/TodoApp';
import Error from './components/Error';
import createStore from './store';

// history 인스턴스 생성
const history = createBrowserHistory();

// 스토어 생성
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {/* 라우팅하기 */}
        <Route exact path="/" component={TodoApp} />
        <Route path="/error" component={Error} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
