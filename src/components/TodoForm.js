import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
    };
  }

  onChange = event => {
    this.setState({
      todo: event.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.handleNewTodo(
      this.state.todo,
      Math.floor(Math.random() * 1000000000)
    );
    this.setState({
      todo: '',
    });
  };

  onClear = event => {
    event.preventDefault();
    this.props.handleClearCompleted();
  };

  render() {
    return (
      <div>
        <form>
          <input
            name='newTodo'
            type='text'
            placeholder='...todo'
            value={this.state.todo}
            onChange={this.onChange}
          />
          <button onClick={this.onSubmit}>Add Todo</button>
          <button onClick={this.onClear}>Clear Completed</button>
        </form>
      </div>
    );
  }
}
