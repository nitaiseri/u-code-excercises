import React, { Component } from 'react';
import MovieCard from './MovieCard';
import '../styles/movies.css'


class Movies extends Component {
    render() {
        return (
            <div className='moviesContainer'>
                <div>{this.props.header}:</div>
                <div className='movieCards'>
                    {this.props.movies.map(m =>
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