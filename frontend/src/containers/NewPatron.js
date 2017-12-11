import { connect } from 'react-redux';

import { createPatron } from '../actions';
import PatronInput from '../components/PatronInput';

const mapStateToProps = function(state) {
  return {};
};

const mapDispatchToProps = {
  onSubmit: createPatron,
};

const NewPatron = connect(mapStateToProps, mapDispatchToProps)(PatronInput);

export default NewPatron;
