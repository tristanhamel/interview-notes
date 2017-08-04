import { initialState as groups } from './groups.reducer';
import { initialState as questionnaires } from './questionnaires.reducer';
import { initialState as questions } from './questions.reducer';
import { initialState as responses } from './responses.reducer';
import { initialState as ui } from './ui.reducer';
import { initialState as user } from './user.reducer';

export const initialState = {
  groups,
  questionnaires,
  questions,
  responses,
  ui,
  user
};