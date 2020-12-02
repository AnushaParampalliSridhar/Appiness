import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './LoginPage.css';
import Login from '../../Components/Login/Login';

class LoginPage extends React.Component{
    
    render(){
        console.log(this.props.loggedInUser);
        if(this.props.loggedInUser){
            return <Redirect to="/dashboard"/>
        }
        return(
            <div className="loginPage">
                <h1 className="title">Appiness Interactive</h1>
                <Login/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser : state.loggedInUser
    }
}

export default connect(mapStateToProps,null)(LoginPage);