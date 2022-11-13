import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../styles/movies.css'


class Movies extends Component {
    render() {
        const movies = this.props.movies;
        return (
            <div className='moviesContainer'>
                <h2>{this.props.header}:</h2>
                <div className='movieCards'>
                    {movies.map(m =>
                        <MovieCard
                            key={m.id}
                            movie={m}
                            icon={this.props.icon}
                            onClickIcon={this.props.onClickIcon}
                        />)}
                </div>
            </div>
        );
    }
}

export default Movies;