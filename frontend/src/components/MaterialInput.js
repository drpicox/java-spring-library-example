import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

import AnyPatronSelect from '../containers/AnyPatronSelect';

export default class MaterialInput extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '', isbn: '', patron: {} };
  }

  disabled() {
    const { title, isbn, patron } = this.state;
    return !(title && isbn && patron.id);
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.disabled()) return;

    this.props.onSubmit({
      ...this.state,
      patronId: this.state.patron.id,
    });
    this.setState({ title: '', isbn: '', patron: {} });
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
        <FormGroup controlId="materialTitle">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            name="title"
            placeholder="Your material title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </FormGroup>

        <FormGroup controlId="materialISBN">
          <ControlLabel>ISBN</ControlLabel>
          <FormControl
            type="text"
            name="isbn"
            placeholder="Your material isbn"
            value={this.state.isbn}
            onChange={this.onChange}
          />
        </FormGroup>

        <FormGroup controlId="materialISBN">
          <ControlLabel>Patronized by</ControlLabel>
          <AnyPatronSelect
            patron={this.state.patron}
            onChange={this.onPatron}
          />
        </FormGroup>

        <Button type="submit" disabled={this.disabled()}>
          Submit
        </Button>
      </form>
    );
  }
}
