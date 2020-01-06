import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from './requestTodo';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('requestTodos Action Creator', () => {
  fetch.mockResponse(JSON.stringify(['쇼핑']));

  const expected = [
    {
      type: 'FETCH_TODOS_REQUEST',
    },
    {
      type: 'FETCH_TODOS_SUCCESS',
      tasks: ['쇼핑'],
    },
  ];
  const store = mockStore();

  return store.dispatch(actions.fetchTodos())
    .then(() => {
      expect(store.getActions()).toEqual(expected);
    });
});