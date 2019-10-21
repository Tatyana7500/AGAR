import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import Main from './Main.jsx';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
    showModel: selectors.getShowModel(state),
    showLeaders: selectors.getLeadersPlayers(state),
});

export const mapDispatchToProps = dispatch => ({
    mouseMove: payload => dispatch(actions.mouseMove(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);