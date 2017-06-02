import { connect } from 'react-redux';

import { editGroupProp, addQuestion, deleteQuestion, editQuestion } from '../../actions/groups.actions';

import { EditTemplateView } from './EditTemplateView';

const mapStateToProps = (state, ownProps) => ({
  group: state.groups.find(q => q.id === ownProps.match.params.groupId),
  templateQuestions: state.templateQuestions
});

const mapDispatchToProps = dispatch => ({
  onAddQuestion: (question, groupId) => dispatch(addQuestion(question, groupId)),
  onDeleteQuestion: (questionId, groupId) => dispatch(deleteQuestion(questionId, groupId)),
  onEditQuestion: (question, groupId) => dispatch(editQuestion(question, groupId)),
  onEditGroupProps: (prop, id) => dispatch(editGroupProp(prop, id))
});

export const EditTemplate = connect(mapStateToProps, mapDispatchToProps)(EditTemplateView);
