import PropTypes from 'prop-types';
import { questionCategories } from './constants/questionCategories';

// ------------------------------------------------------------
//   Questions
// ------------------------------------------------------------
export const Question = {
  id: PropTypes.string,
  questionType: PropTypes.oneOf(['yesNo', 'text', 'number', 'currency', 'select']),
  label: PropTypes.string,
  score: PropTypes.oneOf(['user', 'auto'])
};
export const PQuestion = PropTypes.shape(Question);

export const PTextQuestion = PropTypes.shape(Object.assign({}, Question, {
  placeholder: PropTypes.string
}));

export const PYesNoQuestion = PropTypes.shape(Object.assign({}, Question, {
  options: PropTypes.array
}));

export const PSelectQuestion = PropTypes.shape(Object.assign({}, Question, {
  options: PropTypes.array
}));

export const PNumberQuestion = PropTypes.shape(Object.assign({}, Question, {
  kind: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
}));

// ------------------------------------------------------------
//   Responses
// ------------------------------------------------------------

const Response = {
  question: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.object]),
  score: PropTypes.number,
  id: PropTypes.string
};
export const PResponse = PropTypes.shape(Response);

export const PTextResponse = PropTypes.shape(Object.assign({}, Response, {
  value: PropTypes.string
}));

export const PYesNoResponse = PropTypes.shape(Object.assign({}, Response, {
  value: PropTypes.oneOfType([PropTypes.number])
}));

export const PSelectResponse = PropTypes.shape(Object.assign({}, Response, {
  value: PropTypes.object
}));

export const PNumberResponse = PropTypes.shape(Object.assign({}, Response, {
  value: PropTypes.number
}));

// ------------------------------------------------------------
//   Templates
// ------------------------------------------------------------

export const PQuestionnaireTemplate = PropTypes.shape({
  questions: PropTypes.arrayOf(PQuestion)
});

// ------------------------------------------------------------
//   Questionnaires
// ------------------------------------------------------------

const Questionnaire = {
  id: PropTypes.string,
  created: PropTypes.number,
  modified: PropTypes.number,
  title: PropTypes.string,
  responses: PropTypes.arrayOf(PropTypes.string)
};
export const PQuestionnaire = PropTypes.shape(Questionnaire);

// ------------------------------------------------------------
//   Groups
// ------------------------------------------------------------

const Group = {
  id: PropTypes.string,
  created: PropTypes.number,
  modified: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  questions: PropTypes.arrayOf(PropTypes.string),
  questionnaires: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.string)
};
export const PGroup = PropTypes.shape(Group);

export const GroupReselect = Object.assign({}, Group, {
  questionnaires: PropTypes.arrayOf(PQuestionnaire),
  questions: PropTypes.shape(questionCategories.reduce((obj, cat) =>
    Object.assign(obj, {[cat]: PropTypes.arrayOf(PQuestion)})
  , {}))
});
export const PGroupReselect = PropTypes.shape(GroupReselect);

// ------------------------------------------------------------
//   State
// ------------------------------------------------------------

export const PState = {
  selectedGroup: PropTypes.string,
  modified: PropTypes.number,
  edited: PropTypes.string,
  groups: PropTypes.arrayOf(PGroup),
  questionnaires: PropTypes.arrayOf(PQuestionnaire),
  responses: PropTypes.arrayOf(PResponse)
};