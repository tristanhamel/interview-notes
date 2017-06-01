import { HomeView } from './HomeView';
import { connect } from 'react-redux';

import { groups, selectedGroup } from '../../selectors/groups.selector';
import { setSelectedGroup, editGroupProp, deleteGroup } from '../../actions/groups.actions';
import { addQuestionnaire, deleteQuestionnaire } from '../../actions/questionnaires.actions';

const mapStateToProps = state => ({
  groups: groups(state),
  selectedGroup: selectedGroup(state)
});

const mapDispatchToProps = dispatch => ({
  setSelectedGroup: id => dispatch(setSelectedGroup(id)),
  onAddQuestionnaire: title => dispatch(addQuestionnaire(title)),
  onDeleteQuestionnaire: id => dispatch(deleteQuestionnaire(id)),
  onEditGroupProp: (prop, id) => dispatch(editGroupProp(prop, id)),
  onDeleteGroup: (id) => dispatch(deleteGroup(id))
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeView);
