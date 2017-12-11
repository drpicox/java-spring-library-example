import { connect } from 'react-redux';

import { createLend, updateLend } from '../actions';
import {
  getMaterial,
  getMaterialCurrentLend,
  getPatron,
  getViewId,
} from '../selectors';
import MaterialDetail from '../components/MaterialDetail';

function mapStateToProps(state) {
  const materialId = getViewId(state);
  const material = getMaterial(state, { materialId });
  const patron = getPatron(state, { patronId: material.patronId });
  const currentLend = getMaterialCurrentLend(state, { materialId });
  const currentLender =
    currentLend && getPatron(state, { patronId: currentLend.patronId });
  return {
    material,
    patron,
    currentLend,
    currentLender,
  };
}

const mapDispatchToProps = {
  createLend,
  updateLend,
};

const ViewMaterial = connect(mapStateToProps, mapDispatchToProps)(
  MaterialDetail,
);

export default ViewMaterial;
