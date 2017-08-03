import { combineReducers } from 'redux';

import { groups } from './groups.reducer';
import { questionnaires } from './questionnaires.reducer';
import { questions } from './questions.reducer';
import { responses } from './responses.reducer';
import { ui } from './ui.reducer';
import { user } from './user.reducer';

export const rootReducer = combineReducers({
  groups,
  questionnaires,
  questions,
  responses,
  ui,
  user
});
