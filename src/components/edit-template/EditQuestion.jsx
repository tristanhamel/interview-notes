import React from 'react';
import PropTypes from 'prop-types';

import { PQuestion, PResponse } from '../../proptypes';

import { YesNoQuestion } from '../questions/YesNoQuestion';
import { CurrencyQuestion } from '../questions/CurrencyQuestion';
import { NumberQuestion } from '../questions/NumberQuestion';
import { TextQuestion } from '../questions/TextQuestion';
import { QuestionEditor } from './QuestionEditor';

export class EditQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: undefined,
      isEditing: false
    };

    this.questionComponents = {
      yesNo: (<YesNoQuestion onChange={value => this.answer(value)}
                             question={this.props.question}
                             response={{value: this.state.value}} />),
      text: (<TextQuestion onChange={value => this.answer(value)}
                           question={this.props.question}
                           response={{value: this.state.value}} />),
      number: (<NumberQuestion onChange={value => this.answer(value)}
                               question={this.props.question}
                               response={{value: this.state.value}} />),
      currency: (<CurrencyQuestion onChange={value => this.answer(value)}
                                   question={this.props.question}
                                   response={{value: this.state.value}} />)
    };
  }

  answer(value) {
    this.setState({ value });
  }

  render() {
    return <div>
      <div>
        <span onClick={() => this.setState({isEditing: true})}>
          <span className="glyphicon glyphicon-edit"></span>
          <span>Edit</span>
        </span>
        <span  onClick={() => this.props.onDelete(this.props.question.id)}>
          <span className="glyphicon glyphicon-trash"></span>
          <span>delete</span>
        </span>
      </div>

      <div>
        {this.state.isEditing ?
          <QuestionEditor onSave={question => this.props.onChange(question)}
                          onCancel={this.setState({isEditing: false})}
                          question={this.props.question} /> :
          this.questionComponents[this.props.question.questionType]
        }
      </div>
    </div>;
  }
}
EditQuestion.propTypes = {
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  question: PQuestion,
  response: PResponse
};
