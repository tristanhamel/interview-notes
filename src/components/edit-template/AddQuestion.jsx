import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';

import { PQuestion } from '../../proptypes';

import { QuestionEditor } from './QuestionEditor';

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

  setQuestionType(label, template) {
    this.setState({selectedTemplate: label, newQuestion: Object.assign({}, template)});
  }

  render() {
    return <div>
      {!this.state.isEditing &&
        <div className="add-question-toggle"
             onClick={() => this.edit()}>
          <span><span className="glyphicon glyphicon-plus"></span>Add a new question</span>
        </div>
      }
      {this.state.isEditing &&
        <div className="add-question-form">
          <span>Select a question template: </span>
          <Autocomplete getItemValue={item => item.label}
                        items={this.props.templateQuestions}
                        renderItem={(item, isHighlighted) =>
                          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.label}
                          </div>
                        }
                        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) !== -1}
                        onChange={(e, value) => this.setState({selectedTemplate: value})}
                        onSelect={(value, item) => this.setQuestionType(value, item)}
                        value={this.state.selectedTemplate} />
          {this.state.newQuestion.questionType &&
            <QuestionEditor question={this.state.newQuestion}
                            onSave={question => this.add(question)}
                            onCancel={() => this.reset()}
                            submitLabel="Add" />
          }
          {!this.state.newQuestion.questionType &&
            <div>
              <button className="btn btn-sm btn-default"
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
