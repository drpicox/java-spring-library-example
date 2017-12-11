import React from 'react';

// import MaterialAuthorLabel from '../containers/MaterialAuthorLabel';
import ViewLink from '../containers/ViewLink';

export default function ListMaterials(props) {
  return (
    <ul>
      {props.materials.map(material => (
        <li key={material.id}>
          <ViewLink root="ViewMaterial" id={material.id}>
            {material.title}
          </ViewLink>
        </li>
      ))}
    </ul>
  );
}
