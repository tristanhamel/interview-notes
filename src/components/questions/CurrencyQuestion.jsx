import React from 'react';
import PropTypes from 'prop-types';

import { PNumberQuestion, PNumberResponse } from '../../proptypes';

export class CurrencyQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="currency-question">
        <label htmlFor={`numbe-question-${this.props.question.id}`}>
          {this.props.question.label}
        </label>
        <input id={`numbe-question-${this.props.question.id}`}
               type="number"
               value={this.props.response.value}
               min={this.props.question.min}
               max={this.props.question.max}
               step={this.props.question.step || 1000}
               placeholder={this.props.question.placeholder}
               onChange={e => this.props.onChange(parseInt(e.target.value))}/>
      </div>
    );
  }
}
CurrencyQuestion.propTypes = {
  onChange: PropTypes.func,
  question: PNumberQuestion,
  response: PNumberResponse
};
