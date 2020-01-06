import actions from './tasks';

describe('Actions', () => {
  test('addTask Action', () => {
    const task = '쇼핑';
    const result = actions.addTask(task);
    const expected = {
      type: 'ADD_TASK',
      payload: {
        task,
      },
    };

    expect(result).toEqual(expected);
  })
});