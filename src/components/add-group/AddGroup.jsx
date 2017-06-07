import { AddGroupView } from './AddGroupView';
import { connect } from 'react-redux';

import { addGroup } from '../../actions/groups.actions';

const mapStateToProps = (state) => ({
  groups: state.groups
});

const mapDispatchToProps = dispatch => ({
  onAddGroup: group => dispatch(addGroup(group)),
});

export const AddGroup = connect(mapStateToProps, mapDispatchToProps)(AddGroupView);
