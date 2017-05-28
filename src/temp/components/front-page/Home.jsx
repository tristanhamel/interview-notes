import { HomeView } from './HomeView';
import { connect } from 'react-redux';
import { groups } from '../../selectors/groups.selector';
const mapPropsToState = state => ({
    groups: groups(state)
});
export const Home = connect(mapPropsToState)(HomeView);
