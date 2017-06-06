import { AddGroupView } from './AddGroupView';
import { connect } from 'react-redux';

import { groups } from '../../selectors/groups.selector';
import { addGroup } from '../../actions/groups.actions';

const mapStateToProps = (state) => ({
  groups: groups(state)
});

const mapDispatchToProps = dispatch => ({
  onAddGroup: group => dispatch(addGroup(group)),
});

export const AddGroup = connect(mapStateToProps, mapDispatchToProps)(AddGroupView);
