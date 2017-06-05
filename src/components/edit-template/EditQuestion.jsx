import React from 'react';
import PropTypes from 'prop-types';

import { PQuestion, PResponse } from '../../proptypes';

import { Question } from '../questions/Question';
import { QuestionEditor } from './QuestionEditor';

import './edit-question.scss';

export class EditQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: undefined,
      isEditing: false
    };
  }

  save(question) {
    this.setState({isEditing: false});
    this.props.onChange(question);
  }

  render() {
    return <div className="edit-question">
      <div>
        {this.state.isEditing ?
          <QuestionEditor onSave={question => this.save(question)}
                          onCancel={() => this.setState({isEditing: false})}
                          question={this.props.question} /> :
          <Question onChange={answer => this.setState({ value: answer.value })}
                    question={this.props.question}
                    response={{value: this.state.value}} />
        }
      </div>
      {!this.state.isEditing &&
      <div className="edit-actions">
        <span onClick={() => this.setState({isEditing: true})}
              className="glyphicon glyphicon-edit action-icon">
        </span>
        <span onClick={() => this.props.onDelete(this.props.question.id)}
              className="glyphicon glyphicon-trash action-icon">
        </span>
      </div>
      }
    </div>;
  }
}
EditQuestion.propTypes = {
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  question: PQuestion,
  response: PResponse
};
