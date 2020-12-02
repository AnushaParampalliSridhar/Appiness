import React from 'react';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route exact to="/" component={LoginPage}/>
                <Route exact to="/dashboard" component={DashboardPage}/>
            </BrowserRouter>
        )
    }
}

export default App;