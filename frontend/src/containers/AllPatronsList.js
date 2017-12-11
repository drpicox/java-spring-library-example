import { connect } from 'react-redux';

import { getPatronsList } from '../selectors';
import PatronsList from '../components/PatronsList';

function mapStateToProps(state) {
  return {
    patrons: getPatronsList(state),
  };
}

const AllPatronsList = connect(mapStateToProps)(PatronsList);

export default AllPatronsList;
