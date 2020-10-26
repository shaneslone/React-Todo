import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTodo = styled.div`
  width: 40%;
  background: #05386b;
  border-radius: 10px;
  color: #edf5e1;
  padding: 2%;
  margin: 2%;

  :hover {
    background: #379683;
  }
`;

export default class Todo extends Component {
  onClick = () => {
    this.props.handleCompletedTodo(this.props.id);
  };
  render() {
    return (
      <StyledTodo
        key={this.props.id}
        onClick={this.onClick}
        className={this.props.completed ? 'completed' : 'notCompleted'}
      >
        {this.props.task}
      </StyledTodo>
    );
  }
}
