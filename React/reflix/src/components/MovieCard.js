import React, { Component } from 'react';
import '../styles/movie_card.css'
import {Link } from 'react-router-dom'

class MovieCard extends Component {

    render() {
        return (
            <div className='movieCard'>
                {this.props.movie.title}
                <Link to={`/movies/${this.props.movie.id}`}>
                    <img src={this.props.movie.img} alt="" />
                </Link>
            </div>
        );
    }
}

export default MovieCard;