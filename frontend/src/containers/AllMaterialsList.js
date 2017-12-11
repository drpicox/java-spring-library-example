import { connect } from 'react-redux';

import { getMaterialsList } from '../selectors';
import MaterialsList from '../components/MaterialsList';

function mapStateToProps(state) {
  return {
    materials: getMaterialsList(state),
  };
}

const AllMaterialsList = connect(mapStateToProps)(MaterialsList);

export default AllMaterialsList;
