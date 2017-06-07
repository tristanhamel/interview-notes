import React from 'react';
import PropTypes from 'prop-types';

import { PQuestion, PResponse } from '../../proptypes';

import { YesNoQuestion } from './YesNoQuestion';
import { CurrencyQuestion } from './CurrencyQuestion';
import { NumberQuestion } from './NumberQuestion';
import { TextQuestion } from './TextQuestion';

export class Question extends React.Component {
  constructor(props) {
    super(props);

    this.answerTimeout = 0;
  }

  answer(value) {
    // debounce updates
    if(this.answerTimeout) {
      clearTimeout(this.answerTimeout);
    }

    this.answerTimeout = setTimeout(() => {
      this.props.onChange(Object.assign(
        {},
        this.props.response,
        {questionId: this.props.question.id, value}));
    }, 150);
  }

  render() {
    switch(this.props.question.questionType) {
      case 'yesNo':
        return (<YesNoQuestion onChange={value => this.answer(value)}
                               question={this.props.question}
                               response={this.props.response} />);
      case 'text':
        return (<TextQuestion  onChange={value => this.answer(value)}
                               question={this.props.question}
                               response={this.props.response} />);
      case 'number':
        return (<NumberQuestion onChange={value => this.answer(value)}
                                question={this.props.question}
                                response={this.props.response} />);
      case 'currency':
        return (<CurrencyQuestion onChange={value => this.answer(value)}
                                  question={this.props.question}
                                  response={this.props.response} />);
    }
  }
}
Question.propTypes = {
  onChange: PropTypes.func,
  question: PQuestion,
  response: PResponse
};
