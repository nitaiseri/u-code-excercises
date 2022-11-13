import React, { Component } from 'react';
import User from './User'
import '../styles/home.css'
import {HOME_HEADER} from "../consts"

class Home extends Component {

    render() {
        const users = this.props.users;
        const changeUser = this.props.changeUser;
        return (
            <div className='homeContainer'>
                <h1>{this.props.message ? this.props.message : HOME_HEADER}</h1>
                <div className='usersContainer'>
                    {users.map(u => {
                        return (
                            <User key={u.name} user={u} changeUser={changeUser}></User>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home;