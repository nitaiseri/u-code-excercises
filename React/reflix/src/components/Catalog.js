import React, { Component } from 'react';
import Movies from './Movies'

class Catalog extends Component {

    render() {
        const movies = this.props.movies;
        const user = this.props.currentUser;
        const rentedMovies = movies.filter(m => user.rent.includes(m.id))
        const notRentedMovie = movies.filter(m => !user.rent.includes(m.id))
        return (
            <div className='catalogContainer'>{this.props.currentUser.name}
                <div className='topper'>
                    <input type="text" placeholder='Search'/>
                    <span>Badget: {user.badget}</span>
                </div>
                <Movies movies={rentedMovies} header={"rented"}/>
                <Movies movies={notRentedMovie} header={"catalog"}/>
            </div>
        );
    }
}

export default Catalog;