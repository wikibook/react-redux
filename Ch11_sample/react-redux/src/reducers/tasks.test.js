import reducer from './tasks';

describe('tasks Reducer', () => {
  test('초깃값', () => {
    const state = undefined;
    const action = {};
    const result = reducer(state, action);
    const expected = {
      tasks: [],
    };

    expect(result).toEqual(expected);
  });

  test('ADD_TASK 액션', () => {
    const state = {
      tasks: ['Redux 배우기'],
    };
    const action = {
      type: 'ADD_TASK',
      payload: {
        task: 'Test 배우기',
      },
    };
    const result = reducer(state, action);
    const expected = {
      tasks: ['Redux 배우기', 'Test 배우기'],
    };

    expect(result).toEqual(expected);
  });
});