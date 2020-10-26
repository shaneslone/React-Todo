import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import styled, { createGlobalStyle } from 'styled-components';
// import './App.css';

const GlobalStyle = createGlobalStyle`
body{
  background: #05386B;
  font-size: 62.5%;
}
`;

const StyledApp = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 90vh;
  background: #5cdb95;
  color: #edf5e1;
  text-align: center;
  border-radius: 20px;
  font-size: 1.5rem;

  h2 {
    font-size: 4rem;
  }

  .Todos {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .completed {
    text-decoration: line-through;
    text-decoration-color: black;
    opacity: 50%;
  }

  button {
    background-color: #05386b;
    color: #edf5e1;
  }
`;

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
    return (
      <StyledApp>
        <GlobalStyle />
        <h2>Basic Todo List</h2>
        <div className='Todos'>
          <TodoList
            todoList={this.state.todoList}
            handleCompletedTodo={this.handleCompletedTodo}
          />
        </div>
        <TodoForm
          handleNewTodo={this.handleNewTodo}
          handleClearCompleted={this.handleClearCompleted}
        />
      </StyledApp>
    );
  }
}

export default App;
