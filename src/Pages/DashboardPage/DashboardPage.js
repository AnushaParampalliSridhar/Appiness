import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './DashboardPage.css';

class DashboardPage extends React.Component{
    
    render(){
        if(this.props.loggedInUser===null){
            return <Redirect to="/"/>
        }
        return(
            <div className="dashboardPage">
                <h1 className="title">Appiness Interactive</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser : state.loggedInUser
    }
}

export default connect(mapStateToProps,null)(DashboardPage);