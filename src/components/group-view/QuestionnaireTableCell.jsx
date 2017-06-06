import React from 'react';
// import PropTypes from 'prop-types';
import { PQuestion, PResponse } from '../../proptypes';

export const QuestionnaireTableCell = (props) => {
  switch (props.question.questionType) {
    case 'yesNo':
      return typeof props.response.value === 'boolean' ?
        <span>
          {props.response.value ? props.question.options[0] : props.question.options[1]}
        </span> :
        <span></span>;

    case 'text':
      return <span>{props.response.value}</span>;
    case 'number':
      return <span>{Number(props.response.value).toLocaleString('en')}</span>;

    case 'currency':
      return <span>{Number(props.response.value).toLocaleString('en')}{props.question.kind}</span>;
  }
};
QuestionnaireTableCell.propTypes = {
  question: PQuestion,
  response: PResponse
};

