import { combineReducers } from 'redux';

import lends from './lends/reducer';
import materials from './materials/reducer';
import patrons from './patrons/reducer';
import view from './view/reducer';

export default combineReducers({
  lends,
  materials,
  patrons,
  view,
});
