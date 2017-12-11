import { connect } from 'react-redux';
import { NavItem } from 'react-bootstrap';

import { setView } from '../actions';
import { getViewRoot } from '../selectors';

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    active: getViewRoot(state) === ownProps.root,
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onSelect: function() {
      dispatch(setView(ownProps.root, ownProps.id));
    },
  };
};

const ViewNavItem = connect(mapStateToProps, mapDispatchToProps)(NavItem);

export default ViewNavItem;
