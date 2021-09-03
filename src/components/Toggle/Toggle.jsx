import css from './Toggle.module.css';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Toggle extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className={css.Dropdown}>
        <button
          type="button"
          className={css.toggle}
          onClick={this.toggle}
          style={{
            backgroundColor: `${this.state.visible ? 'teal' : '#c9f2f5'}`,
            color: `${this.state.visible ? '#fff' : '#000'}`,
          }}
        >
          {this.state.visible ? 'Скрыть' : 'Показать'} меню
        </button>

        {this.state.visible && <div className={css.menu}>Выпадающее меню</div>}
      </div>
    );
  }
}
