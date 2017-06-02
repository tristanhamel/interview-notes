import React from 'react';
import { connect } from 'react-redux';

import { editQuestionnaire, submitResponse } from '../../actions/questionnaires.actions';
import { FillQuestionnaireView } from './FillQuestionnaireView';

const mapStateToProps = (state, ownProps) => ({
  questionnaire: state.questionnaires.find(q => q.id === ownProps.match.params.questionnaireId),
  group: state.groups.find(q => q.id === ownProps.match.params.groupId)
});

const mapDispatchToProps = dispatch => ({
  onEditQuestionnaireProp: (prop, id) => dispatch(editQuestionnaire(prop, id)),
  onSubmitResponse: (response, id) => dispatch(submitResponse(response, id))
});

export const FillQuestionnaire = connect(mapStateToProps, mapDispatchToProps)(FillQuestionnaireView);
