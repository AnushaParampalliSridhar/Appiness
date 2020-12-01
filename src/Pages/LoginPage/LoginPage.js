import React from 'react';
import './LoginPage.css';
import Login from '../../Components/Login/Login';

class LoginPage extends React.Component{
    render(){
        return(
            <div className="loginPage">
                <h1 className="title">Appiness Interactive</h1>
                <Login/>
            </div>
        )
    }
}

export default LoginPage;