import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const list = this.props.tasks.map((todo, index) => {
      return <TodoItem {...todo} key={index} />;
    });
    return (
      <div className="TodoList">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default TodoList;
