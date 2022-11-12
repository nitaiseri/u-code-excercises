import React, { Component } from 'react';
import '../styles/movie_card.css'
import {Link } from 'react-router-dom'
import Icon from './Icon'


class MovieCard extends Component {

    render() {
        return (
            <div className='movieCard'>
                {this.props.movie.title}
                <Link to={`/movies/${this.props.movie.id}`}>
                    <div className='card'>
                        <img src={this.props.movie.img} alt="" />
                    </div>
                </Link>
                <Icon 
                    icon={this.props.icon}
                    movieId={this.props.movie.id}
                    onClickFunc={this.props.onClickFunc}
                    className='addButton' />
            </div>
        );
    }
}

export default MovieCard;