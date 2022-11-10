import React, { Component } from 'react';

class Movie extends Component {
    getMovie = (movieId) => {
        return this.props.getMovie(movieId)
    }
    render() {
        const match = this.props.match;
        const movie = this.props.getMovie(parseInt(match.params.movie_id));
        return (
            <div className='movieContainer'>
                <div>{movie.title}</div>
                <img src={movie.img} alt="" />
            </div>
        );
    }
}

export default Movie;