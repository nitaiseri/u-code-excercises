import React, { Component } from 'react';
import Movies from './Movies'
import { BsPlusCircleFill } from "react-icons/bs";
import { HiMinusCircle } from "react-icons/hi";
import '../styles/catalog.css'
import {CONNECT_FIRST_MESSAGE, SEARCH_TEXT, RENT_HEADER, CATALOG_HEADER} from "../consts"


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
        if (user === null) {
            return (
                <div className='catalogContainer'>
                    <h1>
                        {CONNECT_FIRST_MESSAGE}
                    </h1>
                </div>
            )
        }
        const movies = this.props.movies;
        const filteredMovies = this.getFilterMovies();
        const rentedMovies = movies.filter(m => m.isRented)
        const notRentedMovie = filteredMovies.filter(m => !m.isRented)
        return (
            <div className='catalogContainer'>
                <h1>
                    {`WELCOME ${this.props.currentUser.name}`}
                </h1>
                <h2>Your budget: {user.budget}$</h2>
                <div className='header'>
                    <input type="text" placeholder={SEARCH_TEXT} value={this.state.textOfSearch} onChange={this.handleInput} />
                </div>
                <Movies
                    movies={rentedMovies}
                    header={RENT_HEADER}
                    icon={HiMinusCircle}
                    onClickIcon={this.props.unRentMovie} />
                <Movies
                    movies={notRentedMovie}
                    header={CATALOG_HEADER}
                    icon={BsPlusCircleFill}
                    onClickIcon={this.props.rentMovie} />
            </div>
        );
    }
}

export default Catalog;