import React from 'react';
import PropTypes from 'prop-types';

import { PQuestion } from '../../proptypes';

import { QuestionEditor } from './QuestionEditor';
import { SelectDropDown } from '../SelectDropDown';

import './add-question.scss';

export class AddQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      selectedTemplate: '',
      newQuestion: {}
    };
  }

  add(question) {
    this.props.onAdd(question);
    this.reset();
  }

  edit() {
    this.setState({isEditing: true});
  }

  reset() {
    this.setState({
      isEditing: false,
      selectedTemplate: '',
      newQuestion: {}
    });
  }

  setQuestionType(template) {
    this.setState({selectedTemplate: template, newQuestion: Object.assign({}, template)});
  }

  render() {
    return <div>
      {!this.state.isEditing &&
        <button className="btn btn-default add-question-toggle"
                onClick={() => this.edit()}>
          <span><span className="glyphicon glyphicon-plus"></span>Add a new question</span>
        </button>
      }
      {this.state.isEditing &&
        <div className="add-question-form">
          <span>Select a question template: </span>
          <SelectDropDown renderHeader={(option) =>
                            <button className="btn btn-primary select-question-btn">
                              {this.state.selectedTemplate ? option.label  : 'select a template'}
                            </button>}
                          renderOption={(template) =>
                            <div className="select-question-option">
                               <span>{template.label}</span>
                               <span className="badge">{template.questionType}</span>
                            </div>
                          }
                          activeClass="active"
                          selectedOption={this.state.newQuestion}
                          options={this.props.templateQuestions}
                          onSelect={(template) => this.setQuestionType(template)} />
          {this.state.newQuestion.questionType &&
            <QuestionEditor question={this.state.newQuestion}
                            onSave={question => this.add(question)}
                            onCancel={() => this.reset()}
                            submitLabel="Add" />
          }
          {!this.state.newQuestion.questionType &&
            <div>
              <button className="btn btn-default"
                      type="cancel"
                      onClick={()=> this.reset()}>Cancel</button>
            </div>
          }
        </div>
      }
    </div>;
  }
}
AddQuestion.propTypes = {
  onAdd: PropTypes.func,
  templateQuestions: PropTypes.arrayOf(PQuestion),
};
