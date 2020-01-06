import React from 'react';

function Todo(props) {
  const inputTask = (e) => {
    props.inputTask(e.target.value);
  };
  const addTask = () => {
    props.addTask();
  };

  return (
    <div>
      <input type="text" value={props.task} onChange={inputTask} />
      <input type="button" value="add" onClick={addTask} />
      <ul>
        {
          props.tasks.map((item, i) => (
            <li key={i}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Todo;
