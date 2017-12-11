import React from 'react';

import ViewLink from '../containers/ViewLink';

export default function ListPatrons(props) {
  return (
    <ul>
      {props.patrons.map(patron => (
        <li key={patron.id}>
          <ViewLink root="ViewPatron" id={patron.id}>
            {patron.name}
          </ViewLink>
        </li>
      ))}
    </ul>
  );
}
