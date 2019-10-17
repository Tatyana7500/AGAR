import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import Main from './Main.jsx';
import * as actions from '../../actions';
import * as constants from '../../../constants';

export const mapStateToProps = state => ({
    showModel: selectors.getShowModel(state),
});

export const mapDispatchToProps = dispatch => ({
    mouseMove: payload => dispatch(actions.mouseMove(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);