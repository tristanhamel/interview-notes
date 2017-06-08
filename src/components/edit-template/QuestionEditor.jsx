import React from 'react';
import PropTypes from 'prop-types';

import { PQuestion} from '../../proptypes';

export class QuestionEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: undefined
    };
  }

  componentWillMount() {
    this.setState({question: Object.assign({}, this.props.question)});
  }

  save() {
    this.props.onSave(this.state.question);
  }

  updateQuestion(item) {
    this.setState({question: Object.assign({}, this.state.question, item)});
  }

  addSelectOption() {
    const option = {
      label: 'New option',
      value: 1
    };
    this.updateQuestion({options: [...this.props.question.options, option]});
  }

  deleteSelectOption(index) {
    const options = this.props.question.options.filter((i) => i !== index);
    this.updateQuestion({options});
  }

  updateSelectQuestionOptions(label, value, index) {
    const options = this.props.question.options.map((o, i) => i === index ? {label, value} : o);
    this.updateQuestion({options});
  }

  render() {
    return <div className="question-editor">

      <form className="form">
        <div className="form-item">
          <span>Question type: </span>
          <span className="badge">{this.props.question.questionType}</span>
        </div>

        <div className="input-group form-item">
          <label htmlFor="question-editor-label"
                 className="input-group-addon">Question:</label>
          <input type="text"
                 className="form-control"
                 id="question-editor-label"
                 value={this.state.question.label}
                 onChange={e => this.updateQuestion({label: e.target.value})}
                 placeholder="Add a question label"/>
        </div>

        {this.state.question.questionType === 'currency' &&
        <div className="input-group form-item">
          <label htmlFor="question-editor-currency-symbol"
                 className="input-group-addon">Currency symbol:</label>
          <input type="text"
                 className="form-control"
                 id="question-editor-currency-symbol"
                 value={this.state.question.kind}
                 onChange={e => this.updateQuestion({kind: e.target.value})}
                 placeholder="Add a currency"/>
        </div>
        }
        {this.state.question.questionType === 'yesNo' &&
        <fieldset>
          <div className="input-group form-item">
            <label htmlFor="question-editor-yesNo-options1"
                   className="input-group-addon"><em>True</em> label:</label>
            <input type="text"
                   className="form-control"
                   id="question-editor-yesNo-options1"
                   value={this.state.question.options[0]}
                   onChange={e => this.updateQuestion({options: [e.target.value, this.state.question.options[1]]})}
                   placeholder="Yes"/>
          </div>
          <div className="input-group form-item">
            <label htmlFor="question-editor-yesNo-options2"
                   className="input-group-addon"><em>False</em> label:</label>
            <input type="text"
                   className="form-control"
                   id="question-editor-yesNo-options2"
                   value={this.state.question.options[1]}
                   onChange={e => this.updateQuestion({options: [this.state.question.options[0], e.target.value]})}
                   placeholder="No"/>
          </div>
        </fieldset>
        }
        {this.state.question.questionType === 'select' &&
          <div>
            {this.state.question.options.map((option, i) => (
              <div key={i}>
                <div onClick={() => this.deleteSelectOption(i)}>
                  <span className="glyphicon glyphicon-trash"></span>
                  <span>Delete option</span>
                </div>
                <fieldset>
                  <div className="input-group form-item">
                    <label htmlFor={`question-editor-select-options-label${i}`}
                           className="input-group-addon">Label:</label>
                    <input type="text"
                           className="form-control"
                           id={`question-editor-select-options-label${i}`}
                           value={option.label}
                           onChange={e => this.updateSelectQuestionOptions(e.target.value, option.value, i)}/>
                  </div>
                </fieldset>
                <fieldset>
                  <div className="input-group form-item">
                    <label htmlFor={`question-editor-select-options-value${i}`}
                           className="input-group-addon">Value:</label>
                    <input type="number"
                           step="1"
                           className="form-control"
                           id={`question-editor-select-options-value${i}`}
                           value={option.value}
                           onChange={e => this.updateSelectQuestionOptions(option.label, e.target.value,i)}/>
                  </div>
                </fieldset>
              </div>
            ))}
            <div>
              <button className="btn btn-default"
                      onClick={() => this.addSelectOption()}>
                <span className="glyphicon glyphicon-plus"></span>
                <span>Add an option</span>
              </button>
            </div>
          </div>
        }

        <div className="form-item" >
          <button type="submit"
                  className="btn btn-primary"
                  onClick={() => this.save()}>{this.props.submitLabel || 'OK'}</button>
          <button type="cancel"
                  className="btn btn-default"
                  onClick={()=> this.props.onCancel()}>Cancel</button>
        </div>
      </form>
    </div>;
  }
}
QuestionEditor.propTypes = {
  question: PQuestion,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string
};