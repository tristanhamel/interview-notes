// import * as actions from '../constants/ActionTypes';

const initialState = [
  {
    questionType: 'currency',
    label: 'Salary',
    score: 0,
    kind: '$'
  },
  {
    questionType: 'yesNo',
    label: 'HealthCare Coverage',
    score: 0,
    options: ['Yes', 'No']
  },
  {
    questionType: 'text',
    label: 'Operating system (Mac, Linux, ...)',
    score: 0,
  },
  {
    questionType: 'yesNo',
    label: 'Distance working',
    score: 0,
    options: ['Yes', 'No']
  },
  {
    questionType: 'text',
    label: 'IDE (Webstorm,...)',
    score: 0
  },
  {
    questionType: 'yesNo',
    label: 'Flextime',
    score: 0,
    options: ['Yes', 'No']
  },
  {
    questionType: 'number',
    label: 'Holidays (weeks/year)',
    score: 0
  }
];

export const templateQuestions = (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};
