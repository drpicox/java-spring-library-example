import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

export default class PatronInput extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };
  }

  disabled() {
    const { name } = this.state;
    return !name;
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.disabled()) return;

    this.props.onSubmit({
      ...this.state,
    });
    this.setState({ name: '' });
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onPatron = patron => {
    this.setState({ patron });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup controlId="patronName">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            name="name"
            placeholder="Your patron name"
            value={this.state.name}
            onChange={this.onChange}
          />
        </FormGroup>

        <Button type="submit" disabled={this.disabled()}>
          Submit
        </Button>
      </form>
    );
  }
}
