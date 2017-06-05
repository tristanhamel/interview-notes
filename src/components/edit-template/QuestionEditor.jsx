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

  render() {
    return <div className="question-editor">

      <form className="form">
        <div className="form-item">
          <span>Answer type: </span>
          <span>{this.props.question.questionType}</span>
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

        <div className="form-item" >
          <button type="submit"
                  className="btn btn-primary btn-sm"
                  onClick={() => this.save()}>{this.props.submitLabel || 'OK'}</button>
          <button type="cancel"
                  className="btn btn-default btn-sm"
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