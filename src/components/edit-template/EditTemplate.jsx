import { connect } from 'react-redux';

import { editGroupProp, addCategory, deleteCategory } from '../../actions/groups.actions';
import { addQuestion, deleteQuestion, editQuestion } from '../../actions/questions.actions';

import { groups } from '../../selectors/groups.selector';

import { EditTemplateView } from './EditTemplateView';

const mapStateToProps = (state, ownProps) => ({
  group: groups(state).find(q => q.id === ownProps.match.params.groupId),
  templateQuestions: state.templateQuestions
});

const mapDispatchToProps = dispatch => ({
  onAddQuestion: (question, groupId) => dispatch(addQuestion(question, groupId)),
  onAddCategory: (category, groupId) => dispatch(addCategory(category, groupId)),
  onDeleteCategory: (category, groupId) => dispatch(deleteCategory(category, groupId)),
  onDeleteQuestion: (questionId, groupId) => dispatch(deleteQuestion(questionId, groupId)),
  onEditQuestion: (question, groupId) => dispatch(editQuestion(question, groupId)),
  onEditGroupProps: (prop, id) => dispatch(editGroupProp(prop, id))
});

export const EditTemplate = connect(mapStateToProps, mapDispatchToProps)(EditTemplateView);
