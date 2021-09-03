import css from './Dropdown.module.css';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className={css.Dropdown}>
        <button type="button" className={css.btn} onClick={this.show}>
          Показать меню
        </button>

        <button type="button" className={css.btn} onClick={this.hide}>
          Скрыть меню
        </button>

        {this.state.visible && <div className={css.menu}>Выпадающее меню</div>}
      </div>
    );
  }
}
