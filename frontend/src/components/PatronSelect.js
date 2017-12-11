import React, { Component } from 'react';

import { FormControl } from 'react-bootstrap';

export default class PatronSelect extends Component {
  onChange = e => {
    const id = +e.target.value;
    const selectedPatron = this.props.patrons.find(patron => patron.id === id);
    this.props.onChange(selectedPatron || {});
  };

  render() {
    const patron = this.props.patron;
    const patrons = this.props.patrons;
    const className = this.props.className;

    return (
      <FormControl
        componentClass="select"
        placeholder="select patron"
        value={patron.id}
        onChange={this.onChange}
        className={className}
      >
        {!patron.id && <option value="select">select patron</option>}
        {patrons.map(patron => (
          <option value={patron.id} key={patron.id}>
            {patron.name}
          </option>
        ))}
      </FormControl>
    );
  }
}
