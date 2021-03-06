import React from 'react';
import PropTypes from 'prop-types';

import { PYesNoQuestion, PYesNoResponse } from '../../proptypes';

export class YesNoQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <form className="form-horizontal">
      <div className="yes-no-question">
        <label htmlFor={`yes-no-question-${this.props.question.id}`}
               className="control-label">
          {this.props.question.label}
        </label>
        <input id={`yes-no-question-${this.props.question.id}`}
               className=""
               type="checkbox"
               placeholder={this.props.question.placeholder}
               onChange={e => this.props.onChange(!!e.target.checked)}
               checked={this.props.response ? !!this.props.response.value : false}/>
      </div>
    </form>
    );
  }
}
YesNoQuestion.propTypes = {
  onChange: PropTypes.func,
  question: PYesNoQuestion,
  response: PYesNoResponse
};
