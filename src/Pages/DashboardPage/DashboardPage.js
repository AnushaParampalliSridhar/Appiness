import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getUsers} from '../../Redux/Actions/index';
import './DashboardPage.css';

class DashboardPage extends React.Component{

    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        if(this.props.loggedInUser===null){
            return <Redirect to="/"/>
        }
        return(
            <div className="dashboardPage">
                <h1 className="title">Appiness Interactive</h1>
                <div className="users-container">
                    <ul>
                        {this.props.users.map(user => {
                            return(
                                <li key={user.id}>
                                    <p className="field"><strong>Name : </strong> <span>{user.name}</span></p>
                                    <p className="field"><strong>Age : </strong> <span>{user.age}</span></p>
                                    <p className="field"><strong>Gender : </strong> <span>{user.gender}</span></p>
                                    <p className="field"><strong>Email : </strong> <span>{user.email}</span></p>
                                    <p className="field"><strong>Contact Number : </strong> <span>{user.phoneNo}</span></p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser : state.loggedInUser,
        users : state.users
    }
}

export default connect(mapStateToProps,{getUsers})(DashboardPage);