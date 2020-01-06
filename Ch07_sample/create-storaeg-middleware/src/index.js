import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Todo from './components/Todo';
import ReactDOM from 'react-dom';

const initialState = {
  task : '',
  tasks : []
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.task])
      };
    default:
      return state;
  }
}

// 로그 미들웨어
const logger = store => next => action => {
  // 액션 적용 전의 상태 출력
  console.log(store.getState());

  // 어떤 액션이 적용됐는지 출력
  console.log(action);

  const result = next(action);

  // 액션 적용 후의 상태 출력
  console.log(store.getState());
  console.log('------------------');

  // 특별히 값을 리턴할 필요가 없으므로 result를 그대로 리턴
  return result;
}

const storageMiddleware = store => next => action => {
  const result = next(action);
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
  return result;
};

const savedState = JSON.parse(localStorage.getItem('app-state'));
const store = createStore(
  tasksReducer,
  savedState ? savedState : tasksReducer(undefined, {type: 'Init'}),
  applyMiddleware(logger,storageMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
);
