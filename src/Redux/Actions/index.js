export const login = (username,password) => {
    if(username!=="hruday@gmail.com"&&password!="hruday123"){
        return{
            type : "SET_LOGIN_ERROR",
            payload : "Not a valid user"
        }
    } else {
        return {
            type : "LOGIN",
            payload : username
        }
    }
}

export const setLoginError = (errorMessage) => {
    return{
        type : "SET_LOGIN_ERROR",
        payload : errorMessage
    }
}