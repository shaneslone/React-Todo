import React, { Component } from 'react';

export default class Todo extends Component {
  onClick = () => {
    this.props.handleCompletedTodo(this.props.id);
  };
  render() {
    return (
      <div
        key={this.props.id}
        onClick={this.onClick}
        className={this.props.completed ? 'completed' : 'notCompleted'}
      >
        {this.props.task}
      </div>
    );
  }
}
