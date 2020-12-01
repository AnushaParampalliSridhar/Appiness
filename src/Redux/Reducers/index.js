import {combineReducers} from 'redux';
import {loggedInUser} from '../Reducers/loggedInUser';
import {loginError} from '../Reducers/loginError';

export default combineReducers({
    loggedInUser : loggedInUser,
    loginError : loginError
})