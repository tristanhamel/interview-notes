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
    return <div>
      <div>
        <span>Answer type: </span>
        <span>{this.props.question.questionType}</span>
      </div>

      <form onSubmit={() => this.save()}>
        <label htmlFor="question-editor-label">Question:</label>
        <input type="text"
               id="question-editor-label"
               value={this.state.question.label}
               onChange={e => this.updateQuestion({label: e.target.value})}
               placeholder="Add a question label"/>

        {this.state.question.questionType === 'currency' &&
        <input type="text"
               value={this.state.question.kind}
               onChange={e => this.updateQuestion({kind: e.target.value})}
               placeholder="Add a currency"/>

        }
        {this.state.question.questionType === 'yesNo' &&
        <fieldset>
          <label htmlFor="question-editor-yesNo-options1">Selected response label:</label>
          <input type="text"
                 id="question-editor-yesNo-options1"
                 value={this.state.question.options[0]}
                 onChange={e => this.updateQuestion({options: [e.target.value, this.state.question.options[1]]})}
                 placeholder="Yes"/>
          <label htmlFor="question-editor-yesNo-options2">Unselected response label:</label>
          <input type="text"
                 id="question-editor-yesNo-options2"
                 value={this.state.question.options[1]}
                 onChange={e => this.updateQuestion({options: [this.state.question.options[0], e.target.value]})}
                 placeholder="No"/>
        </fieldset>
        }
        <button type="submit">{this.props.submitLabel || 'OK'}</button>
      </form>
      <button type="cancel" onClick={()=> this.props.onCancel()}>Cancel</button>
    </div>;
  }
}
QuestionEditor.propTypes = {
  question: PQuestion,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string
};