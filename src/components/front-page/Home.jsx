import { HomeView } from './HomeView';
import { connect } from 'react-redux';

import { groups} from '../../selectors/groups.selector';

const mapStateToProps = state => ({
  groups: groups(state)
});

export const Home = connect(mapStateToProps)(HomeView);
