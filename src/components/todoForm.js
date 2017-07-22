import React, { Component } from 'react';

import Todo from './todo/todo';
import Finished from './todo/finished';


class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todosList: ['task 1', 'task 2', 'task 3', 'task 4', 'task 5'],
      finishedList: [],
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(index) {
    const item = this.state.todosList.splice(index, 1);
    this.state.finishedList.push(item[0]);
    this.forceUpdate();
  }
  render() {
    return (
      <div>
      <Todo click={this.handleOnClick} data={this.state.todosList} />
      <Finished newData={this.state.finishedList} />
      </div>
    )
  }
};

export default TodoForm;
