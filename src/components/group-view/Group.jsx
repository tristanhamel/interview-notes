import { GroupView } from './GroupView';
import { connect } from 'react-redux';

import { groupsWithScores } from '../../selectors/groups.selector';
import { editGroupProp, deleteGroup } from '../../actions/groups.actions';
import { addQuestionnaire, deleteQuestionnaire } from '../../actions/questionnaires.actions';

const mapStateToProps = (state, ownProps) => ({
  group: groupsWithScores(state).find(g => g.id === ownProps.match.params.groupId)
});

const mapDispatchToProps = dispatch => ({
  onAddQuestionnaire: (title, groupId) => dispatch(addQuestionnaire(title, groupId)),
  onDeleteQuestionnaire: id => dispatch(deleteQuestionnaire(id)),
  onEditGroupProp: (prop, id) => dispatch(editGroupProp(prop, id)),
  onDeleteGroup: (id) => dispatch(deleteGroup(id))
});

export const Group = connect(mapStateToProps, mapDispatchToProps)(GroupView);
