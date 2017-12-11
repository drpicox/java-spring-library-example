import React from 'react';
import { Button, PageHeader } from 'react-bootstrap';
import ViewLink from '../containers/ViewLink';
import AnyPatronSelect from '../containers/AnyPatronSelect';

export default class MaterialDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { patron: {} };
  }

  onLent = () => {
    this.props.updateLend({
      patronId: this.state.patron.id,
      materialId: this.props.material.id,
      lendingDate: Date.now(),
      receivingDate: 0,
    });
  };

  onPatron = patron => {
    this.setState({ patron });
  };

  onReturn = () => {
    this.props.updateLend({
      ...this.props.currentLend,
      receivingDate: Date.now(),
    });
  };

  render() {
    const { material, patron, currentLender } = this.props;

    return (
      <div>
        <PageHeader>Material</PageHeader>
        <p>
          <strong>Title</strong>: {material.title}
          <br />
          <strong>ISBN</strong>: {material.isbn}
          <br />
          <strong>Patron</strong>:{' '}
          <ViewLink root="ViewPatron" id={patron.id}>
            {patron.name}
          </ViewLink>
          <br />
        </p>
        {currentLender && (
          <div>
            <h3>Is lent</h3>
            <p>
              <strong>To</strong>:{' '}
              <ViewLink root="ViewPatron" id={currentLender.id}>
                {currentLender.name}
              </ViewLink>
              <br />
              <Button onClick={this.onReturn}>Return</Button>
            </p>
          </div>
        )}

        {!currentLender && (
          <div>
            <h3>Available</h3>
            <p>
              Lent To:{' '}
              <AnyPatronSelect
                patron={this.state.patron}
                onChange={this.onPatron}
              />
              <br />
            </p>
            <Button onClick={this.onLent} disabled={!this.state.patron.id}>
              Lend
            </Button>
          </div>
        )}
      </div>
    );
  }
}
