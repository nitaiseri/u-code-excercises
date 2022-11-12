import React, { Component } from 'react';
import '../styles/user.css'
import {Link } from 'react-router-dom'

class User extends Component {
    changeUser = () => {
        this.props.changeUser(this.props.user.id);
    }

    render() {
        const user = this.props.user;
        return (
            <div className="userContainer" onClick={this.changeUser}>
                <Link to="/catalog">
                    <h1>{user.name}</h1>
                </Link>
            </div>

        )
    }
}

export default User;
