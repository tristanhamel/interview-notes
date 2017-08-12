import { GroupView } from './GroupView';
import { connect } from 'react-redux';
import { setModal } from '../../actions/ui.actions';

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
  onDeleteGroup: (id) => dispatch(deleteGroup(id)),
  openModal: (modalId, modalData) => dispatch(setModal(modalId, modalData))
});

export const Group = connect(mapStateToProps, mapDispatchToProps)(GroupView);
