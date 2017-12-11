import 'rxjs/Rx';

import { combineEpics } from 'redux-observable';

import lendsEpic from './lends/epic';
import materialsEpic from './materials/epic';
import populateEpic from './populate/epic';
import patronsEpic from './patrons/epic';
import viewEpic from './view/epic';

export default combineEpics(
  lendsEpic,
  materialsEpic,
  populateEpic,
  patronsEpic,
  viewEpic,
);
