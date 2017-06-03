import React from 'react';
import PropTypes from 'prop-types';

import { PQuestion, PResponse } from '../../proptypes';

import { Question } from '../questions/Question';
import { QuestionEditor } from './QuestionEditor';

export class EditQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: undefined,
      isEditing: false
    };
  }

  answer(value) {
    console.log(value);
    this.setState({ value });
  }

  save(question) {
    this.setState({isEditing: false});
    this.props.onChange(question);
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
          <QuestionEditor onSave={question => this.save(question)}
                          onCancel={() => this.setState({isEditing: false})}
                          question={this.props.question} /> :
          <Question onChange={answer => this.answer(answer.value)}
                    question={this.props.question}
                    response={{value: this.state.value}} />
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
