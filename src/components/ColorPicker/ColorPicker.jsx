import React, { Component } from 'react';
import './ColorPicker.css';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
    color: '',
  };

  // colorChange = () => {
  //   this.setState(prevState => ({
  //     visible: !prevState.visible,
  //   }));
  // };
  setActiveColor = color => {
    this.setState({ color: color });
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['btn'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('btnActive');
    }
    return optionClasses.join(' ');
  };

  render() {
    // ===Деструктуризация пропов и стейтов в методе рендер - паттерн====
    // Чтобы удалить this.state и сделать код чище
    // const { activeOptionIdx } = this.state;
    // Чтобы удалить this.props и сделать код чище
    // const { options } = this.state;
    const { label } = this.props.options[this.state.activeOptionIdx];

    return (
      <div className="wrapper">
        <h2 className="title" style={{ color: this.state.color }}>
          Color Picker
        </h2>
        <p>Выбран цвет: {label}</p>
        <div className="ColorPicker">
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => {
                this.setActiveColor(color);
                this.setActiveIdx(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
