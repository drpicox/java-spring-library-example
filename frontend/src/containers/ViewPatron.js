import { connect } from 'react-redux';

import {
  getMaterial,
  getPatron,
  getPatronCurrentLends,
  getViewId,
} from '../selectors';
import PatronDetail from '../components/PatronDetail';

function mapStateToProps(state) {
  const patronId = getViewId(state);
  const patron = getPatron(state, { patronId });

  const currentLends = getPatronCurrentLends(state, { patronId });
  const currentMaterials = currentLends.map(lend =>
    getMaterial(state, { materialId: lend.materialId }),
  );
  return {
    patron,
    currentMaterials,
  };
}

const ViewPatron = connect(mapStateToProps)(PatronDetail);

export default ViewPatron;
