import React from 'react';
import { Table } from 'react-bootstrap';

import ViewLink from '../containers/ViewLink';

export default function Welcome() {
  return (
    <div>
      <h1>This is the Library Frontend</h1>
      <p>It has the following features implemented:</p>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ViewLink root="Welcome">Welcome</ViewLink>
            </td>
            <td>Is this screen that lists features</td>
          </tr>
          <tr>
            <td>
              <ViewLink root="AllMaterialsList">AllMaterialsList</ViewLink>
            </td>
            <td>
              A list with all available materials. For each material it has a
              link to the corresponding ViewMaterial.
            </td>
          </tr>
          <tr>
            <td>
              <ViewLink root="NewMaterial">[+]&nbsp;NewMaterial</ViewLink>
            </td>
            <td>A formulary to add new material to the library.</td>
          </tr>
          <tr>
            <td>ViewMaterial&nbsp;details</td>
            <td>
              A view that shows details about materiels. If the material is
              currently lended, it shows the current lender and a button to
              proceed with the material reception. If the material is not
              currently lended, it has a dropdown (AnyPatronSelect) to choose
              one patron and create a new lending with selected patron.
              <br />
              It is accessible from{' '}
              <ViewLink root="AllMaterialsList">AllMaterialsList</ViewLink>{' '}
              link.
            </td>
          </tr>
          <tr>
            <td>
              <ViewLink root="AllPatronsList">AllPatronsList</ViewLink>
            </td>
            <td>
              A list with all available materials. For each material it has a
              link to the corresponding ViewPatron.
            </td>
          </tr>
          <tr>
            <td>
              <ViewLink root="NewPatron">[+]&nbsp;NewPatron</ViewLink>
            </td>
            <td>A formulary to add a new patron to the library.</td>
          </tr>
          <tr>
            <td>ViewPatron&nbsp;details</td>
            <td>
              A view that shows the details of a patron, and the list of all
              materials currently lended to that patron. It also offers links to
              each ViewMaterial.
              <br />
              It is accessible from{' '}
              <ViewLink root="AllPatronsList">AllPatronsList</ViewLink> link.
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
