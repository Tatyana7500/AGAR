import * as actions from '../../actions';
import { connect } from 'react-redux';
import Login from './Login.jsx';
import constants from '../../../constants';

export const mapStateToProps = state => ({
});

export const mapDispatchToProps = dispatch => ({
    authPlayer: payload => dispatch({ type: constants.AUTH, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);