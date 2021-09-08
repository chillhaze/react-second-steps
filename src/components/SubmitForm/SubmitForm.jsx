import React, { Component } from 'react';
import shortId from 'shortid';

import css from './SubmitForm.module.css';

export class SubmitForm extends Component {
  state = {
    name: '',
    tag: '',
  };

  nameInputId = shortId.generate();
  tagInputId = shortId.generate();

  handleFormChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    // метод вешаем на форму, а не на button!
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.title}>FORM</h2>

        <form className={css.form} onSubmit={this.handleOnSubmit}>
          <label className={css.label} htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleFormChange}
              className={css.input}
              id={this.nameInputId}
            />
          </label>

          <label className={css.label} htmlFor={this.tagInputId}>
            Tag
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleFormChange}
              className={css.input}
              id={this.tagInputId}
            />
          </label>
          <button className={css.btn}>Send</button>
        </form>
      </div>
    );
  }
}
