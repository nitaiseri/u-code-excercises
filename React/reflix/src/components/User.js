import React, { Component } from 'react';
import '../styles/user.css'
import {Link } from 'react-router-dom'



class User extends Component {
    changeUser = () => {
        this.props.changeUser(this.props.user.id);
    }

    render() {
        return (
            <div className="userContainer" onClick={this.changeUser}>
                <Link to="/catalog">
                    <h1>{this.props.user.name}</h1>
                </Link>
            </div>

        )
    }
}

export default User;
