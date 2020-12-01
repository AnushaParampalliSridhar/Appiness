import React from 'react';
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

    render(){
        return(
            <div className="login-container">
                <div className="input-container">
                    <label for="username">Username : </label>
                    <input type="email" id="username" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="input-container">
                    <label for="password">Password : </label>
                    <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <button type="submit">Login</button>
            </div>
        )
    }
}

export default Login;