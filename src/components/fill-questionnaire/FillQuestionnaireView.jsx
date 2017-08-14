import React from 'react';
import PropTypes from 'prop-types';

import { PQuestionnaire, PGroupReselect } from '../../proptypes';
import { EditText } from '../EditText';
import { Question } from '../questions/Question';

import './fill-questionnaire.scss';

export class FillQuestionnaireView extends React.Component{
  constructor(props) {
    super(props);
  }

  editQuestionnaireProp(prop) {
    this.props.onEditQuestionnaireProp(prop, this.props.questionnaire.id);
  }

  render() {
    return (
      <div className="fill-questionnaire container">
        <div className="fill-questionnaire-title">
          <h3 className="group-title">{this.props.group.title}</h3>
          <span className="glyphicon glyphicon-menu-right"></span>
          <EditText onChange={title => this.editQuestionnaireProp({ title })}
                    text={this.props.questionnaire.title}
                    textClass="h1">
          </EditText>
        </div>

        <EditText onChange={description => this.editQuestionnaireProp({ description })}
                  text={this.props.questionnaire.description}
                  long={true}
                  textClass="lead">
        </EditText>
        <div className="categories">
          {Object.keys(this.props.group.questions).map((cat, i) => {
            return <div key={i}>
              <h4>{cat}</h4>
              <div className="questions">
                {this.props.group.questions[cat].map((q, j) => {
                  const response = this.props.questionnaire.responses.find(r => r.question === q.id);
                  return <Question question={q}
                                   key={j}
                                   response={response}
                                   onChange={response => this.props.onSubmitResponse(response, this.props.questionnaire.id)}/>;
                })}
              </div>
            </div>;
          })}
        </div>

      </div>
    );
  }
}

FillQuestionnaireView.propTypes = {
  questionnaire: PQuestionnaire,
  group: PGroupReselect,
  onEditQuestionnaireProp: PropTypes.func,
  onSubmitResponse: PropTypes.func
};
