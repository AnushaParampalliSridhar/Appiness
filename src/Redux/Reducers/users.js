import USERS from '../../Data/Users';

export const UserReducer = (state=[],action) => {
    switch(action.type){
        case 'GET_USERS' : return USERS
        default : return state
    }
}