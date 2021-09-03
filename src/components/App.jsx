import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import { Counter } from './Counter';
import { Dropdown } from './Dropdown';
import { Toggle } from './Toggle';
import { ColorPicker } from './ColorPicker';
import { TodoList } from './TodoList';
import todosData from './data/todos.json';
import { colorPickerOptions } from './data/colorPickerOptions';

export class App extends Component {
  state = {
    todos: todosData,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const comletedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <div>
        <div>
          <p>Общее количество ToDo: {totalTodoCount}</p>
          <p>Кол-во выполненых ToDo: {comletedTodosCount}</p>
        </div>
        <TodoList todos={todos} deleteTodo={this.deleteTodo} />
        <ColorPicker options={colorPickerOptions} />
        <Counter initialValue={0} />
        <Counter initialValue={10} />
        <Dropdown />
        <Toggle />
      </div>
    );
  }
}
