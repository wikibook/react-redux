import 'isomorphic-fetch';

const fetchTodosRequest = () => ({
  type: 'FETCH_TODOS_REQUEST',
});

const fetchTodosSuccess = (tasks) => ({
  type: 'FETCH_TODOS_SUCCESS',
  tasks,
});

const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosRequest());
    
    return fetch('http://example.com/todos')
      .then(res => res.json())
      .then(tasks => dispatch(fetchTodosSuccess(tasks)));
  };
};

export default {
  fetchTodos,
};