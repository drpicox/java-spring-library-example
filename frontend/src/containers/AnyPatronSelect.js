import { connect } from 'react-redux';

import PatronSelect from '../components/PatronSelect';
import { getPatronsList } from '../selectors';

function mapStateToProps(state, ownProps) {
  return {
    patron: ownProps.patron,
    patrons: getPatronsList(state),
    onChange: ownProps.onChange,
  };
}

const CurrentPatronSelect = connect(mapStateToProps)(PatronSelect);

export default CurrentPatronSelect;
