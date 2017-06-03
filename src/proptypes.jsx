import PropTypes from 'prop-types';

// ------------------------------------------------------------
//   Questions
// ------------------------------------------------------------
export const Question = {
  id: PropTypes.string,
  questionType: PropTypes.oneOf(['yesNo', 'text', 'number', 'currency']),
  label: PropTypes.string,
  score: PropTypes.number
};
export const PQuestion = PropTypes.shape(Question);

export const PTextQuestion = PropTypes.shape(Object.assign({}, Question, {
  placeholder: PropTypes.string
}));

export const PYesNoQuestion = PropTypes.shape(Object.assign({}, Question, {
  // options: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, value: PropTypes.any}))
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
  questionId: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number])
};
export const PResponse = PropTypes.shape(Response);

export const PTextResponse = PropTypes.shape(Object.assign({}, Response, {
  value: PropTypes.string
}));

export const PYesNoResponse = PropTypes.shape(Object.assign({}, Response, {
  value: PropTypes.bool
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
  created_at: PropTypes.number,
  last_modified: PropTypes.number,
  title: PropTypes.string,
  responses: PropTypes.arrayOf(PResponse)
};
export const PQuestionnaire = PropTypes.shape(Questionnaire);

// ------------------------------------------------------------
//   Groups
// ------------------------------------------------------------

const Group = {
  id: PropTypes.string,
  created_at: PropTypes.number,
  last_modified: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  questionsIds: PropTypes.arrayOf(PropTypes.string),
  questionnairesIds: PropTypes.arrayOf(PropTypes.string),
};
export const PGroup = PropTypes.shape(Group);

export const GroupReselect = Object.assign({}, Group, {
  questionnaires: PropTypes.arrayOf(PQuestionnaire),
  questions: PropTypes.arrayOf(PQuestion)
});
export const PGroupReselect = PropTypes.shape(GroupReselect);

// ------------------------------------------------------------
//   State
// ------------------------------------------------------------

export const PState = {
  selectedGroup: PropTypes.string,
  last_modified: PropTypes.number,
  edited: PropTypes.string,
  groups: PropTypes.arrayOf(PGroup),
  questionnaires: PropTypes.arrayOf(PQuestionnaire)
};