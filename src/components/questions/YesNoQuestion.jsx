import React from 'react';
import PropTypes from 'prop-types';

import { PYesNoQuestion, PYesNoResponse } from '../../proptypes';

export class YesNoQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="number-question">
        <label htmlFor={`yes-no-question-${this.props.question.id}`}>
          {this.props.question.label}
        </label>
        <input id={`yes-no-question-${this.props.question.id}`}
               type="checkbox"
               placeholder={this.props.question.placeholder}
               onChange={e => this.props.onChange(!!e.target.checked)}
               checked={!!this.props.response.value}/>
      </div>
    );
  }
}
YesNoQuestion.propTypes = {
  onChange: PropTypes.func,
  question: PYesNoQuestion,
  response: PYesNoResponse
};
