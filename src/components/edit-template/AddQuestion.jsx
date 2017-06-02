import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';

import { PQuestion } from '../../proptypes';

export class AddQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      selectedTemplate: '',
      newQuestion: {
        label: 'question label',
        questionType: null,
        kind: null,
        options: []
      }
    };
  }

  add() {
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

  updateQuestion(item) {
    console.log(item);
    this.setState({newQuestion: Object.assign({}, this.state.newQuestion, item)});
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
            <div>
              <div>
                <span>Answer type: </span>
                <span>{this.state.newQuestion.questionType}</span>
              </div>
              <form onSubmit={e => this.add(e)}>
                <label htmlFor="add-question-label">Question:</label>
                <input type="text"
                       id="add-question-label"
                       value={this.state.newQuestion.label}
                       onChange={e => this.updateQuestion({label: e.target.value})}
                       placeholder="Add a question label"/>

                {this.state.newQuestion.questionType === 'currency' &&
                  <input type="text"
                         value={this.state.newQuestion.kind}
                         onChange={e => this.updateQuestion({kind: e.target.value})}
                         placeholder="Add a currency"/>

                }
                {this.state.newQuestion.questionType === 'yesNo' &&
                  <fieldset>
                    <label htmlFor="add-question-yesNo-options1">Selected response label:</label>
                    <input type="text"
                           id="add-question-yesNo-options1"
                           value={this.state.newQuestion.options[0]}
                           onChange={e => this.updateQuestion({options: [e.target.value, this.state.newQuestion.options[1]]})}
                           placeholder="Yes"/>
                    <label htmlFor="add-question-yesNo-options2">Unselected response label:</label>
                    <input type="text"
                           id="add-question-yesNo-options2"
                           value={this.state.newQuestion.options[1]}
                           onChange={e => this.updateQuestion({options: [this.state.newQuestion.options[0], e.target.value]})}
                           placeholder="No"/>
                  </fieldset>
                }
                <button type="submit">Add</button>
              </form>
            </div>
          }
          <button type="cancel" onClick={()=> this.reset()}>Cancel</button>
        </div>
      }
    </div>;
  }
}
AddQuestion.propTypes = {
  onAdd: PropTypes.func,
  templateQuestions: PropTypes.arrayOf(PQuestion),
};
