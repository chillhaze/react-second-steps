import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import { Counter } from './Counter';
import { Dropdown } from './Dropdown';
import { Toggle } from './Toggle';
import { ColorPicker } from './ColorPicker';
import { TodoList } from './TodoList';
import { Input } from './Input';
import { Form } from './Form';
import { SubmitForm } from './SubmitForm';
import todosData from './data/todos.json';
import { colorPickerOptions } from './data/colorPickerOptions';

export class App extends Component {
  state = {
    todos: todosData,
    inputValue: '',
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  handleFormChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleInputChange = e => {
    // console.log(e.currentTarget.value);
    this.setState({ inputValue: e.currentTarget.value });
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
          <SubmitForm onSubmit={this.formSubmitHandler} />
        </div>
        <div>
          <Form
            label="LABEL"
            name="name"
            tag="tag"
            onChange={this.handleFormChange}
          />
        </div>
        {/* onChange содержит в себе и onBlur={} и onFocus={} */}
        <div>
          <Input
            label="LABEL"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </div>
        <TodoList
          todos={todos}
          deleteTodo={this.deleteTodo}
          totalTodoCount={totalTodoCount}
          comletedTodosCount={comletedTodosCount}
        />
        <ColorPicker options={colorPickerOptions} />
        <Counter initialValue={0} />
        <Counter initialValue={10} />
        <Dropdown />
        <Toggle />
      </div>
    );
  }
}
