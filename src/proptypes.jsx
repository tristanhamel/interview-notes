import PropTypes from 'prop-types';

export const Question = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  score: PropTypes.oneOf([-1, 0, 1])
};
export const PQuestion = PropTypes.shape(Question);

export const PTextQuestion = PropTypes.shape(Object.assign({}, Question, {
  placeholder: PropTypes.string
}));

export const PYesNoQuestion = PropTypes.shape(Object.assign({}, Question, {
  options: PropTypes.arrayOf({label: PropTypes.string, value: PropTypes.any})
}));

const PResponse = PropTypes.shape({
  questionId: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
});

export const PTextResponse = PropTypes.shape(Object.assign({}, Question, {
  value: PropTypes.string
}));

export const PYesNoResponse = PropTypes.shape(Object.assign({}, Question, {
  value: PropTypes.bool
}));

export const PTemplate = PropTypes.shape({
  questions: PropTypes.arrayOf(PQuestion)
});

const Questionnaire = {
  id: PropTypes.string,
  created_at: PropTypes.number,
  last_modified: PropTypes.number,
  title: PropTypes.string,
  responses: PropTypes.arrayOf(PResponse)
};
export const PQuestionnaire = PropTypes.shape(Questionnaire);

const Group = {
  id: PropTypes.string,
  created_at: PropTypes.number,
  last_modified: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  questionnairesIds: PropTypes.arrayOf(PropTypes.string),
  template: PTemplate
};
export const PGroup = PropTypes.shape(Group);

export const GroupReselect = Object.assign({}, Group, {
  questionnaires: PropTypes.arrayOf(PQuestionnaire)
});
export const PGroupReselect = PropTypes.shape(GroupReselect);

export const PState = {
  selectedGroup: PropTypes.string,
  last_modified: PropTypes.number,
  edited: PropTypes.string,
  groups: PropTypes.arrayOf(PGroup),
  questionnaires: PropTypes.arrayOf(PQuestionnaire)
};