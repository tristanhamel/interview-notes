import React from 'react';
import { connect } from 'react-redux';

import { FillQuestionnaireView } from './FillQuestionnaireView';

const mapStateToProps = (state, ownProps) => ({
  questionnaire: state.questionnaires.find(q => q.id === ownProps.match.params.questionnaireId),
  group: state.groups.find(q => q.id === ownProps.match.params.groupId)
});

const mapDispatchToProps = dispatch => ({

});

export const FillQuestionnaire = connect(mapStateToProps, mapDispatchToProps)(FillQuestionnaireView);
