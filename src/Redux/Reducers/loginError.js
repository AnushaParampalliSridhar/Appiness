export const loginError = (state='',action) => {
    switch(action.type){
        case 'SET_LOGIN_ERROR' : return action.payload
        default : return state
    }
}