import React from 'react';
import PropTypes from 'prop-types';

import { PQuestionnaire, PGroup } from '../../proptypes';
import { EditText } from '../EditText';
import { Question } from '../questions/Question';

export class FillQuestionnaireView extends React.Component{
  constructor(props) {
    super(props);
  }

  editQuestionnaireProp(prop) {
    this.props.onEditQuestionnaireProp(prop, this.props.questionnaire.id);
  }

  render() {
    return (
      <div className="fill-questionnaire">
        <h3>{this.props.group.title}</h3>
        <EditText onChange={title => this.editQuestionnaireProp({ title })}
                  text={this.props.questionnaire.title}
                  textClass="h1">
        </EditText>

        <EditText onChange={description => this.editQuestionnaireProp({ description })}
                  text={this.props.questionnaire.description}
                  long={true}
                  textClass="lead">
        </EditText>

        <div className="questions">
          {this.props.group.questions.map((q, i) => {
            return <Question question={q} key={i}
                             response={this.props.questionnaire.responses.find(r => r.questionId === q.id)}
                             onChange={response => this.props.onSubmitResponse(response, this.props.questionnaire.id)}/>;
          })}
        </div>
      </div>

    );
  }
}

FillQuestionnaireView.propTypes = {
  questionnaire: PQuestionnaire,
  group: PGroup,
  onEditQuestionnaireProp: PropTypes.func,
  onSubmitResponse: PropTypes.func
};
