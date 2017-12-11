import React from 'react';
import { Grid } from 'react-bootstrap';

import ViewRoot from '../containers/ViewRoot';
import Navbar from './Navbar';

export default function Main() {
  return (
    <div>
      <Navbar />
      <div style={{ height: '56px' }} />
      <br />
      <Grid>
        <ViewRoot />
      </Grid>
    </div>
  );
}
