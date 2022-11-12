import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import Icon from './Icon'
import '../styles/movie_card.css'


class MovieCard extends Component {

    render() {
        const movie = this.props.movie;
        return (
            <div className='movieCard'>
                {movie.title}
                <Link to={`/movies/${movie.id}`}>
                    <div className='card'>
                        <img src={movie.img} alt="" />
                    </div>
                </Link>
                <Icon 
                    icon={this.props.icon}
                    movieId={movie.id}
                    onClickIcon={this.props.onClickIcon}
                    />
            </div>
        );
    }
}

export default MovieCard;