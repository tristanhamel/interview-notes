import { combineReducers } from 'redux';

import { edited } from './edited.reducer';
import { groups } from './groups.reducer';
import { questionnaires } from './questionnaires.reducer';
import { questions } from './questions.reducer';
import { selectedGroup } from './selectedGroup.reducer';
import { templateQuestions } from './templateQuestions.reducer';


export const rootReducer = combineReducers({
  edited,
  groups,
  questionnaires,
  selectedGroup,
  questions,
  templateQuestions
});
