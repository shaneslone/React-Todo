// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// import React from 'react';
import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return this.props.todoList.map(todo => {
      return (
        <Todo
          task={todo.task}
          id={todo.id}
          completed={todo.completed}
          handleCompletedTodo={this.props.handleCompletedTodo}
        />
      );
    });
  }
}
