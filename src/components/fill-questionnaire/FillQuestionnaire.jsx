import { connect } from 'react-redux';

import { editQuestionnaire } from '../../actions/questionnaires.actions';
import { submitResponse } from '../../actions/responses.actions';
import { FillQuestionnaireView } from './FillQuestionnaireView';

import { populatedQuestionnaires, groups } from '../../selectors/groups.selector';

const mapStateToProps = (state, ownProps) => ({
  questionnaire: populatedQuestionnaires(state).find(q => q.id === ownProps.match.params.questionnaireId),
  group: groups(state).find(q => q.id === ownProps.match.params.groupId)
});

const mapDispatchToProps = dispatch => ({
  onEditQuestionnaireProp: (prop, id) => dispatch(editQuestionnaire(prop, id)),
  onSubmitResponse: (response, id) => dispatch(submitResponse(response, id))
});

export const FillQuestionnaire = connect(mapStateToProps, mapDispatchToProps)(FillQuestionnaireView);
