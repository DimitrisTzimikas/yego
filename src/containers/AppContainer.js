import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Local Files */
import LandingScreen from '../screens/Landing.screen';

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch, props) => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingScreen);

export default AppContainer;
