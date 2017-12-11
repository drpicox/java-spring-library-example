import React from 'react';
import { Alert } from 'react-bootstrap';

import Welcome from './Welcome';
import AllMaterialsList from '../containers/AllMaterialsList';
import AllPatronsList from '../containers/AllPatronsList';
import NewMaterial from '../containers/NewMaterial';
import NewPatron from '../containers/NewPatron';
import ViewMaterial from '../containers/ViewMaterial';
import ViewPatron from '../containers/ViewPatron';

export default function ViewRoot(props) {
  switch (props.root) {
    case '':
    case 'Welcome':
      return <Welcome />;
    case 'AllMaterialsList':
      return <AllMaterialsList />;
    case 'AllPatronsList':
      return <AllPatronsList />;
    case 'NewMaterial':
      return <NewMaterial />;
    case 'NewPatron':
      return <NewPatron />;
    case 'ViewMaterial':
      return <ViewMaterial />;
    case 'ViewPatron':
      return <ViewPatron />;
    default:
      return (
        <Alert bsStyle="danger">
          <strong>Not Found 404</strong>
          <br />
          Cannot found root <code>'{props.root}'</code>
          <br />
          Modify <code>'src/components/Root'</code> to add the new root
        </Alert>
      );
  }
}
