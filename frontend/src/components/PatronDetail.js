import React from 'react';
import { PageHeader } from 'react-bootstrap';

import MaterialsList from './MaterialsList';
export default function PatronDetail(props) {
  return (
    <div>
      <PageHeader>Patron</PageHeader>
      <p>
        <strong>Name</strong>: {props.patron.name}
        <br />
      </p>
      <br />
      {props.currentMaterials.length === 0
        ? 'Have no materials'
        : 'Have the following materials:'}
      <MaterialsList materials={props.currentMaterials} />
    </div>
  );
}
