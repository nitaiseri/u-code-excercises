import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import User from './User'
import '../styles/home.css'

class Home extends Component {

    render() {
        const users = this.props.users;
        const changeUser = this.props.changeUser;
        return (
            <div className='homeContainer'>
                <h1>Select User:</h1>
                <div className='usersContainer'>
                    {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
                        {users.map(u => {return (
                            // <Grid item xs={2}>
                                <User key={u.name} user={u} changeUser={changeUser}></User>
                            // </Grid>
                        )})}
                    {/* </Grid> */}
                </div>
            </div>
        );
    }
}

export default Home;