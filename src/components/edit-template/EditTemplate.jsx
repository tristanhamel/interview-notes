import { connect } from 'react-redux';

import { editGroupProp, addCategory, deleteCategory } from '../../actions/groups.actions';
import { addQuestion, deleteQuestion, editQuestion } from '../../actions/questions.actions';

import { populatedGroups } from '../../selectors/groups.selector';

import { EditTemplateView } from './EditTemplateView';

import './edit-template.scss';

const mapStateToProps = (state, ownProps) => ({
  group: populatedGroups(state).find(q => q.id === ownProps.match.params.groupId),
});

const mapDispatchToProps = dispatch => ({
  onAddQuestion: (question, groupId) => dispatch(addQuestion(question, groupId)),
  onDeleteCategory: (category, groupId) => dispatch(deleteCategory(category, groupId)),
  onDeleteQuestion: (question, groupId) => dispatch(deleteQuestion(question, groupId)),
  onEditQuestion: (question, groupId) => dispatch(editQuestion(question, groupId)),
  onEditGroupProps: (prop, id) => dispatch(editGroupProp(prop, id))
});

export const EditTemplate = connect(mapStateToProps, mapDispatchToProps)(EditTemplateView);
