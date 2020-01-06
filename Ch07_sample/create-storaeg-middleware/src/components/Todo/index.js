import { connect } from 'react-redux';
import Todo from './Todo';

function mapStateToProps({ task, tasks }) {
  return {
    task,
    tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch({type: 'ADD_TASK', task});
    },
    inputTask(task) {
      dispatch({type: 'INPUT_TASK', task})
    }
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, stateProps, {
    ...dispatchProps,
    addTask() {
      dispatchProps.addTask(stateProps.task);
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Todo);
