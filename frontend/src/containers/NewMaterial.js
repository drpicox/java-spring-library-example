import { connect } from 'react-redux';

import { createMaterial } from '../actions';
import MaterialInput from '../components/MaterialInput';

const mapStateToProps = function(state) {
  return {};
};

const mapDispatchToProps = {
  onSubmit: createMaterial,
};

const NewMaterial = connect(mapStateToProps, mapDispatchToProps)(MaterialInput);

export default NewMaterial;
