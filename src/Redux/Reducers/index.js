import {combineReducers} from 'redux';
import {loggedInUser} from './loggedInUser';
import {loginError} from './loginError';
import {UserReducer} from './users';

export default combineReducers({
    loggedInUser : loggedInUser,
    loginError : loginError,
    users : UserReducer
})