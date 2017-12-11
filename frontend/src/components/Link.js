import React, { Component } from 'react';

export default class Link extends Component {
  onClick = e => {
    e.preventDefault();
    this.props.setView(this.props.root, this.props.id);
  };
  render() {
    return (
      <a className={this.props.className} onClick={this.onClick} href=".">
        {this.props.children}
      </a>
    );
  }
}
