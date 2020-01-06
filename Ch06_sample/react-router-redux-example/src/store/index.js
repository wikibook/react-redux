import {
  // 이름 충돌이 일어나므로 별칭으로 임포트 
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import tasksReducer from '../reducers/tasks';

// history는 src/index.js에서 전달되는 형태
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      // react-router-redux의 리듀서
      router: routerReducer,
    }),
    applyMiddleware(
      logger,
      // react-router-redux의 리덕스 미들웨어
      routerMiddleware(history)
    )
  );
}
