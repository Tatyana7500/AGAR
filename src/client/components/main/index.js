import { connect } from 'react-redux';
import * as selectors from '../../selectors';
import Main from './Main.jsx';

export const mapStateToProps = state => ({
    foods: selectors.getFoods(state),
    player: selectors.getPlayer(state),
});

export const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);