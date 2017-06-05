import React from 'react';
import PropTypes from 'prop-types';

import { PNumberQuestion, PNumberResponse } from '../../proptypes';

export class NumberQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="number-question">
        <label htmlFor={`number-question-${this.props.question.id}`}>
          {this.props.question.label}
        </label>
        <input id={`number-question-${this.props.question.id}`}
               type="number"
               value={this.props.response ? this.props.response.value : 0}
               min={this.props.question.min}
               max={this.props.question.max}
               step={this.props.question.step || 1000}
               placeholder={this.props.question.placeholder}
               onChange={e => this.props.onChange(parseInt(e.target.value))}/>
      </div>
    );
  }
}
NumberQuestion.propTypes = {
  onChange: PropTypes.func,
  question: PNumberQuestion,
  response: PNumberResponse
};
