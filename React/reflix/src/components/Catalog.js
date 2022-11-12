import React, { Component } from 'react';
import Movies from './Movies'
import { BsPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";


class Catalog extends Component {

    render() {
        const movies = this.props.movies;
        const user = this.props.currentUser;
        const rentedMovies = movies.filter(m => m.isRented)
        const notRentedMovie = movies.filter(m => !m.isRented)
        return (
            <div className='catalogContainer'>{this.props.currentUser.name}
                <div className='topper'>
                    <input type="text" placeholder='Search'/>
                    <span>Badget: {user.badget}</span>
                </div>
                <Movies 
                    movies={rentedMovies}
                    header={"rented"}
                    icon={HiMinusCircle}
                    onClickFunc={this.props.unRentMovie}/>
                <Movies movies={notRentedMovie}
                    header={"catalog"}
                    icon={BsPlusCircleFill}
                    onClickFunc={this.props.rentMovie}/>
            </div>
        );
    }
}

export default Catalog;