import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }

  handleNewTodo = (task, randomNumber) => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: task,
          id: randomNumber,
          completed: false,
        },
      ],
    });
  };

  handleCompletedTodo = itemID => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (itemID === todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    });
  };

  handleClearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed),
    });
  };

  render() {
    console.log(this.state.todoList);
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList
          todoList={this.state.todoList}
          handleCompletedTodo={this.handleCompletedTodo}
        />
        <TodoForm
          handleNewTodo={this.handleNewTodo}
          handleClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
}

export default App;
