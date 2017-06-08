export const templateQuestions = [
  {
    questionType: 'currency',
    label: 'Default currency question',
    score: 'auto',
    kind: '$',
    category: 'default'
  },
  {
    questionType: 'yesNo',
    label: 'Default yes-no question',
    score: 'auto',
    options: ['Yes', 'No'],
    category: 'default'
  },
  {
    questionType: 'text',
    label: 'Default text question',
    score: 'user',
    category: 'default'
  },
  {
    questionType: 'number',
    label: 'Default number question',
    score: 'auto',
    category: 'default'
  },
  {
    questionType: 'select',
    label: 'Default select question',
    placeholder: 'select an option',
    score: 'auto',
    options: [],
    category: 'default'
  },
  {
    questionType: 'currency',
    label: 'Salary',
    score: 'auto',
    kind: '$',
    category: 'Benefits and compensation'
  },
  {
    questionType: 'yesNo',
    label: 'HealthCare Coverage',
    score: 'auto',
    options: ['Yes', 'No'],
    category: 'Benefits and compensation'
  },
  {
    questionType: 'select',
    label: 'Operating system',
    placeholder: 'select an option',
    score: 'auto',
    options: [
      {label: 'Mac', value: 1.5},
      {label: 'Linux', value: 1},
      {label: 'Windows', value: 0},
    ],
    category: 'Development environment'
  },
  {
    questionType: 'yesNo',
    label: 'Distance working',
    score: 'auto',
    options: ['Yes', 'No'],
    category: 'Working environment'
  },
  {
    questionType: 'text',
    label: 'IDE (Webstorm,...)',
    score: 'user',
    category: 'Development environment'
  },
  {
    questionType: 'yesNo',
    label: 'Flextime',
    score: 'auto',
    options: ['Yes', 'No'],
    category: 'Working environment'
  },
  {
    questionType: 'number',
    label: 'Holidays (weeks/year)',
    score: 'auto',
    category: 'Benefits and compensation'
  }
];
