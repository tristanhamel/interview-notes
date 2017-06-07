import { combineReducers } from 'redux';

import { edited } from './edited.reducer';
import { groups } from './groups.reducer';
import { questionnaires } from './questionnaires.reducer';
import { questions } from './questions.reducer';

export const rootReducer = combineReducers({
  edited,
  groups,
  questionnaires,
  questions
});
