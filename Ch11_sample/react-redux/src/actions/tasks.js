const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task,
  },
});
  
export default {
  addTask,
};