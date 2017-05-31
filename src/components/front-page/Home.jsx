import { HomeView } from './HomeView';
import { connect } from 'react-redux';

import { groups, selectedGroup } from '../../selectors/groups.selector';
import { setSelectedGroup } from '../../actions/groups.actions';
import { addQuestionnaire } from '../../actions/questionnaires.actions';

const mapStateToProps = state => ({
  groups: groups(state),
  selectedGroup: selectedGroup(state)
});

const mapDispatchToProps = dispatch => ({
  setSelectedGroup: id => dispatch(setSelectedGroup(id)),
  onAddQuestionnaire: title => dispatch(addQuestionnaire(title))
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeView);
