import { connect } from 'react-redux';

import { getViewRoot } from '../selectors';
import Root from '../components/Root';

function mapStateToProps(state) {
  return {
    root: getViewRoot(state),
  };
}

const ViewRoot = connect(mapStateToProps)(Root);

export default ViewRoot;
