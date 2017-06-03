import React from 'react';
import PropTypes from 'prop-types';

import { PQuestion, PGroup } from '../../proptypes';
import { EditText } from '../EditText';
import { AddQuestion } from './AddQuestion';
import { EditQuestion } from './EditQuestion';

export class EditTemplateView extends React.Component {
  constructor(props) {
    super(props);
  }

  editGroupProp(prop) {
    this.props.onEditGroupProps(prop, this.props.group.id);
  }

  render() {
    return (
      <div className="fill-questionnaire">
        <EditText onSave={title => this.editGroupProp({ title })}
                  text={this.props.group.title}>
          <h3>{this.props.group.title}</h3>
        </EditText>

        <EditText onSave={description => this.editQuestionnaireProp({ description })}
                  text={this.props.group.description}
                  long={true}>
          <span>{this.props.group.description}</span>
        </EditText>

        <div>
          {this.props.group.questions.map((q, i) => {
            return <EditQuestion question={q} key={i}
                                 onChange={response => this.props.onEditQuestion(response)}
                                 onDelete={questionId => this.props.onDeleteQuestion(questionId, this.props.group.id)}/>;
          })}
        </div>
        <div>
          <AddQuestion templateQuestions={this.props.templateQuestions}
                       onAdd={question => this.props.onAddQuestion(question, this.props.group.id)}/>
        </div>
      </div>

    );
  }
}

EditTemplateView.propTypes = {
  templateQuestions: PropTypes.arrayOf(PQuestion),
  group: PGroup,
  onAddQuestion: PropTypes.func,
  onDeleteQuestion: PropTypes.func,
  onEditQuestion: PropTypes.func,
  onEditGroupProps: PropTypes.func
};
