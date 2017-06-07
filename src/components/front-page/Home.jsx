import { HomeView } from './HomeView';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  groups: state.groups
});

export const Home = connect(mapStateToProps)(HomeView);
