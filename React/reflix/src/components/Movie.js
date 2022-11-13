import React, { Component } from 'react';
import '../styles/movie.css';


class Movie extends Component {
    getMovie = (movieId) => {
        return this.props.getMovie(movieId)
    }
    render() {
        const match = this.props.match;
        const movie = this.props.getMovie(parseInt(match.params.movie_id));
        return (
            <div className='movieContainer'>
                <div className='movieDetails'>
                    <div>{movie.title} ({movie.year})</div>
                    <img src={movie.img} alt="" />
                    <div className='discription'>{movie.descrShort}</div>
                </div>
            </div>
        );
    }
}

export default Movie;