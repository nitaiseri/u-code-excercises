import React, { Component } from 'react';
import Movies from './Movies'
import { BsPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";


class Catalog extends Component {
    constructor() {
        super();
        this.state = {
            textOfSearch: ""
        }
    }

    handleInput = (text) => {
        const inputValue = text.target.value.toLowerCase();
        this.setState({
            textOfSearch: inputValue
        })
    }

    getFilterMovies = () => {
        return this.props.movies.filter(m => m.title.toLowerCase().includes(this.state.textOfSearch));
    }

    render() {
        const user = this.props.currentUser;
        const movies = this.props.movies;
        const filteredMovies = this.getFilterMovies();
        const rentedMovies = movies.filter(m => m.isRented)
        const notRentedMovie = filteredMovies.filter(m => !m.isRented)
        return (
            <div className='catalogContainer'>{this.props.currentUser.name}
                <div className='topper'>
                    <input type="text" placeholder='Search' value={this.state.textOfSearch} onChange={this.handleInput} />
                    <span>Badget: {user.badget}</span>
                </div>
                <Movies
                    movies={rentedMovies}
                    header={"rented"}
                    icon={HiMinusCircle}
                    onClickIcon={this.props.unRentMovie} />
                <Movies
                    movies={notRentedMovie}
                    header={"catalog"}
                    icon={BsPlusCircleFill}
                    onClickIcon={this.props.rentMovie} />
            </div>
        );
    }
}

export default Catalog;