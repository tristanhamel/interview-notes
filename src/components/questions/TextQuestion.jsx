import React from 'react';
import PropTypes from 'prop-types';

import { PTextQuestion, PTextResponse } from '../../proptypes';

export class TextQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-question">
        <label htmlFor={`text-question-${this.props.question.id}`}>
          {this.props.question.label}
        </label>
        <input id={`text-question-${this.props.question.id}`}
               type="text"
               value={this.props.response}
               placeholder={this.props.question.placeholder}
               onChange={e => this.props.onChange(e.target.value)}/>
      </div>
    );
  }
}
TextQuestion.propTypes = {
  onChange: PropTypes.func,
  question: PTextQuestion,
  response: PTextResponse
};
