import React from 'react';
// import PropTypes from 'prop-types';
import { PQuestion, PResponse } from '../../proptypes';

export const QuestionnaireTableCell = (props) => {
  switch (props.question.questionType) {
    case 'yesNo':
      return props.response.value != null ?
        <span>
          <span>{props.response.value ? props.question.options[0] : props.question.options[1]}</span>
          <span>{props.response.score}</span>
        </span> :
        <span></span>;

    case 'text':
      return <span>{props.response.value}</span>;
    case 'number':
      return <span>
        <span>{Number(props.response.value).toLocaleString('en')}</span>
        <span>{props.response.score}</span>
        </span>;

    case 'currency':
      return (
        <span>
          <span>{Number(props.response.value).toLocaleString('en')}{props.question.kind}</span>
          <span>{props.response.score}</span>
        </span>);

    case 'select':
      return (
        <span>
          <span>{props.response.value.label}</span>
          <span>{props.response.score}</span>
        </span>);
  }
};
QuestionnaireTableCell.propTypes = {
  question: PQuestion,
  response: PResponse
};

