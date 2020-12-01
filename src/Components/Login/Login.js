import React from 'react';
import validator from 'validator'
import {connect} from 'react-redux';
import {login,setLoginError} from '../../Redux/Actions/index';
import './Login.css';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.id] : evt.target.value
        })
    }

    handleSubmit = () => {
        console.log("hit");
        if(this.state.username===''&&this.state.password===''){
            this.props.setLoginError('Username and password should not be empty');
        }else if(this.state.username===''){
            this.props.setLoginError('Username should not be empty');
        }else if(this.state.password===''){
            this.props.setLoginError('Password should not be empty');
        }else if(!validator.isEmail(this.state.username)){
            this.props.setLoginError('Please enter a valid email id');
        }else{
            this.props.login(this.state.username,this.state.password);
        }
    }

    render(){
        console.log(this.props.loginError);
        return(
            <div className="login-container">
                {this.props.loginError!==''?
                    <div className="error-container">
                        {this.props.loginError}
                    </div>
                :null}
                <div className="input-container">
                    <label htmlFor="username">Username : </label>
                    <input type="email" id="username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password : </label>
                    <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <button type="submit" onClick={this.handleSubmit}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginError : state.loginError
    }
}

export default connect(mapStateToProps,{login,setLoginError})(Login);