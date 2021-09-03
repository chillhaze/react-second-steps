import React from 'react';
// import PropTypes from 'prop-types'
import { Controls } from './Controls';
import css from './Counter.module.css';

export class Counter extends React.Component {
  // Статические состояния до state объявляем
  static defaultProps = {
    initialValue: 0,
  };

  // Бабел позволяет прописывать пропсы прямо в классе
  static propTypes = {
    /////////////
  };

  state = {
    value: this.props.initialValue,
  };

  // Для перезаписи значения, но не для его изменения
  // handleIncrement = event => {
  //   this.setState({ value: 20 });
  // };

  handleIncrement = event => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = event => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className={css.container}>
        <span className={css.countValue}>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
