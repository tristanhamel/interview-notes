import React from 'react';
import PropTypes from 'prop-types';

import { SelectDropDown } from '../SelectDropDown';

import { PSelectQuestion, PSelectResponse } from '../../proptypes';

export class SelectQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form-horizontal">
        <div className="select-question">
          <label htmlFor={`select-question-${this.props.question.id}`}
                 className="control-label">
            {this.props.question.label}
          </label>
          <SelectDropDown options={this.props.question.options}
                          id={`select-question-${this.props.question.id}`}
                          renderOption={(option) => <span>{option.label}</span>}
                          renderHeader={(option) => (
                            <button className="btn btn-default select-category-btn">
                              {option ? option.label : this.props.question.placeholder}
                            </button>
                          )}
                          onSelect={(option) => this.props.onChange(option)}
                          activeClass="active"
                          selectedOption={this.props.response ? this.props.response.value : null} />
        </div>
      </form>
    );
  }
}
SelectQuestion.propTypes = {
  onChange: PropTypes.func,
  question: PSelectQuestion,
  response: PSelectResponse
};
