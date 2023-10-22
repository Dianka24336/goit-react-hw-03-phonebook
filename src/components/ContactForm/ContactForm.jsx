import React, { Component } from 'react';

import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  //   handleChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value,
  //     });
  //   };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.formLabel}>
          Name
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit" className={css.addButton}>
          Add contact
        </button>
      </form>
    );
  }
}
