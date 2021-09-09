import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import { VideoList } from './VideoList';
import ReactPlayer from 'react-player';
import videos from './data/videos.json';

import { Section } from './Section';
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
    selectedVideo: null,
  };

  selectedVideo = link => {
    this.setState({ selectedVideo: link });
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
    const { selectedVideo } = this.state;
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const comletedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <div>
        <Section>
          <ReactPlayer
            url={selectedVideo}
            controls
            style={{
              margin: 'auto',
              backgroundImage:
                'url(https://www.pngkit.com/png/full/267-2678423_bacteria-video-thumbnail-default.png)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
          <VideoList
            videos={videos}
            onSelect={this.selectedVideo}
            selectedVideo={selectedVideo}
          />
        </Section>

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
