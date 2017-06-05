// import * as actions from '../constants/ActionTypes';

const initialState = [
  {
    questionType: 'currency',
    label: 'Salary',
    score: 0,
    kind: '$',
    category: 'Benefits and compensation'
  },
  {
    questionType: 'yesNo',
    label: 'HealthCare Coverage',
    score: 0,
    options: ['Yes', 'No'],
    category: 'Benefits and compensation'
  },
  {
    questionType: 'text',
    label: 'Operating system (Mac, Linux, ...)',
    score: 0,
    category: 'Development environment'
  },
  {
    questionType: 'yesNo',
    label: 'Distance working',
    score: 0,
    options: ['Yes', 'No'],
    category: 'Working environment'
  },
  {
    questionType: 'text',
    label: 'IDE (Webstorm,...)',
    score: 0,
    category: 'Development environment'
  },
  {
    questionType: 'yesNo',
    label: 'Flextime',
    score: 0,
    options: ['Yes', 'No'],
    category: 'Working environment'
  },
  {
    questionType: 'number',
    label: 'Holidays (weeks/year)',
    score: 0,
    category: 'Benefits and compensation'
  }
];

export const templateQuestions = (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};
